const cruisingHeight = 2500;
var motion = require('./Flight/motion');
var track = require('./Flight/track');
var security = require('./Security/alert');
var client = require('./client');
// var copterface = require('./Recog/copterface');


var droneClient = arDrone.createClient();

function startUp() {
	motion.takeoff();
	newLeg();
}

function newLeg() {
	track.newDest(); 
	var xDist = Math.abs(track.destPos.x - track.curPos.x);
	var yDist = Math.abs(track.destPos.y - track.curPos.y);
	if(xDist <= yDist) {
		if(track.destPos.x <= track.curPos.x) {
			
		}
	}
}



var d = client.on('navdata', function(data){
	tmp = json.parse(data);
	track.velocity = tmp.demo.velocity;
	track.batteryDying = tmp.droneState.lowBattery;
});
/**
 * Observes if the drone has reached the X target and makes
 * appropriate adjustments if necessary.
 */
Object.observe(track.reachedX, function(changes) {
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
Object.observe(track.reachedY, function(changes) {
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


Object.observe(copterface.tracking, function(changes) {

	if(copterface.track && !alerted) {
		security.alert();
		security.alerted = true;
	} else if(!copterface.track)
		security.alerted = false;
}
