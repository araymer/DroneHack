
var const cruisingHeight = 2500;
var motion = require('./Flight/motion');
var track = require('./Flight/track');
var security = require('.Security/alert');
var client = require('client');
var copterface = require('./Recog/copterface');

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
			motion.rotate()
		}
	}

}

Object.observe(track.reachedX, function(changes) {
	if(track.reachedX && track.reachedY)
		newLeg();
});
