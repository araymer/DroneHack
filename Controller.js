const cruisingHeight = 2500;
var arDrone = require('ar-drone');
var droneClient = arDrone.createClient();
var motion = require('./Flight/motion');
var track = require('./Flight/track');
var security = require('./Security/alert');
var client = require('./client');
var O = require('node-observer');
// var copterface = require('./Recog/copterface');

function startUp() {
	client.startUp();
	motion.takeoff(droneClient);
	motion.up(droneClient);
	newLeg();
}

function newLeg() {
	track.newDest(); 
	var xDist = Math.abs(track.destPos.x - track.curPos.x);
	var yDist = Math.abs(track.destPos.y - track.curPos.y);
	if(Math.abs(track.destPos.x - track.curPos.x) < Math.abs(track.destPos.y - track.curPos.y)) {
		if(xDist < track.curPos.x){
			while(track.dir !== "EAST")
				motion.left(droneClient);
			motion.patrol(droneClient);
		}
		if(track.curPos.x < xDist){
			while(track.dir !== "WEST")
				motion.right(droneClient);
			motion.patrol(droneClient);
		}
	} else{
		if(yDist < track.curPos.y){
			while(track.dir !== "SOUTH")
				motion.left(droneClient);
			motion.patrol(droneClient);
		}
		if(track.curPos.y < yDist){
			while(track.dir !== "NORTH")
				motion.right(droneClient);
			motion.patrol(droneClient);

		}
	}
}


droneClient.on('navdata', function(data){
	data = data + " ";
    if( !( /{.*}/.test(data) ) )
    	return;
	tmp = JSON.parse(data);
	track.velocity = tmp.demo.velocity;
	track.batteryDying = tmp.droneState.lowBattery;
});
/**
 * Observes if the drone has reached the X target and makes
 * appropriate adjustments if necessary.
 */
O.subscribe(track.reachedX, "X REACHED", function(changes) {
	if(track.reachedX) {
		if (track.reachedY) {
			newLeg();
		}
		else { //hasn't reached Y
			if (track.dir == 4) { //facing west
				if (track.curPos.y < track.destPos.y) { //dest to the north
					motion.right(droneClient);
				}
				else {
					motion.left(droneClient);
				}
		}
			if (track.dir == 2) { //facing east
				if (track.curPos.y < track.destPos.y) { //dest to the north
					motion.left(droneClient);
				}
				else {
					motion.right(droneClient);
				}
			}
		}
	}
});

/**
 * Observes if the drone has reached the Y target and makes
 * appropriate adjustments if necessary.
 */
O.subscribe(track.reachedY, "Y REACHRED", function(changes) {
	if(track.reachedY) {
		if (track.reachedX) {
			newLeg();
		}
		else { //hasn't reached X
			if (track.dir == 1) { //facing north
				if (track.curPos.x < track.destPos.x) { //dest to the east
					motion.right(droneClient);
				}
				else {
					motion.left(droneClient);
				}
			}
			if (track.dir == 3) { //facing south
				if (track.curPos.y < track.destPos.y) { //dest to the east
					motion.left(droneClient);
				}
				else {
					motion.right(droneClient);
				}
			}
		}
	}
});

startUp();


// O.subscribe(copterface.tracking, "COPTER", function(changes) {

// 	if(copterface.track && !alerted) {
// 		security.alert();
// 		security.alerted = true;
// 	} else if(!copterface.track) {
// 		security.alerted = false;
// 	}
// });
