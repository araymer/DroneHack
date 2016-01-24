

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var motion = require('./Flight/motion');

var data;

motion.patrol(client);
//TODO: listen for interruptions from the IR sensors

/**
* @param client the client to the drone
* Simple call for executing whatever the current motion is.
*
**/
function executeIt() {
	//get motion and execute.
}

/**
 param client - the client to the drone.
* @return the nav data from the drone.
* gets and returns the nav data for the drone.
**/
function getData(client) {
	return motion.data(client);
}
