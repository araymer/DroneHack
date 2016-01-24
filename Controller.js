

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var motion = require('./Flight/motion');

var data;

/*
Test of movements using ar-drone api

motion.lightShow(client);
client.takeoff();
client.after(5000, function() {
	this.up(1);
}).after (750, function() {
	this.front(.07);
}).after(6000, function() {
	this.stop();
}).after(3000, function() {
	this.clockwise(.05);
}).after(9000, function() {
	this.stop();
}).after(3000, function() {
	this.land();
}).after(3000, function() {
	process.exit();
});*/

/* Test of Motion commands interrupting patrol
*/

// client.takeoff();
// 	client.after(3000, function () {
// 		this.front(1);
// 	}).after(3000, function () {
// 		motion.avoidLeft(client);
// 	}).after(10000, function () {
// 		this.land();
//		process.exit();
// 	});

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
