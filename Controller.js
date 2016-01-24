

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var decision = require('./Flight/decision');

var data;

/*
Test of movements using ar-drone api

decision.lightShow(client);
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

/* Test of Decision commands interrupting patrol
*/

// client.takeoff();
// 	client.after(3000, function () {
// 		this.front(1);
// 	}).after(3000, function () {
// 		decision.backupTurnLeft(client);
// 	}).after(10000, function () {
// 		this.land();
//		process.exit();
// 	});

decision.patrol(client);
//TODO: listen for interruptions from the IR sensors

/**
* @param client the client to the drone
* Simple call for executing whatever the current decision is.
*
**/
function executeIt() {
	//get decision and execute.
}

/**
 param client - the client to the drone.
* @return the nav data from the drone.
* gets and returns the nav data for the drone.
**/
function getData(client) {
	return decision.data(client);
}
