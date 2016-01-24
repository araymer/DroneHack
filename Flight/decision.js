
var exports = module.exports = {};

var state = "STANDBY";
/*States:
STANDBY, HOVER, FORWARD, BACK, LEFTTURN, RIGHTTURN, LEFT, RIGHT, UP, DOWN,
LANDING, TAKEOFF
*/

//Get drone state and print it to console
exports.data = function(client) {
	client.on('navdata', console.log);
};

//Flashes LEDs orange, used for testing
exports.lightShow = function (client) {
	client.animateLeds('blinkOrange', 3, 5);
};

/**************************************************
ADVANCED FUNCTIONS
	These functions all return the client to allow
	chaining of functions in a builder pattern.
	These are meant to use to cut down on repetitive
	code when handling IR events.
***************************************************/
//Takeoff and landing included to return the client
//	upon callback to allow it to fit into the builder
//	pattern.
exports.takeoff = function (client) {
	var takeoffCallback = function() {return client;};
	client.takeoff(takeoffCallback);
};

exports.land = function (client) {
	var landCallback = function() {return client;};
	client.land(landCallback);
};

exports.backupTurnLeft = function (client) {
	client.stop();
	state = "LEFTTURN";
	client.after(2000, function() {
		this.back(.2);
	}).after(2000, function() {
		this.stop();
	}).after(2000, function() {
		this.counterClockwise(.2);
	}).after(3000, function() {
		this.stop();
	}).after(2000, function() {
		exports.patrol(client);
		return client;
	});
};

exports.backupTurnRight = function (client) {
	client.stop();
	state = "RIGHTTURN";
	client.after(2000, function() {
		this.back(.2);
	}).after(2000, function() {
		this.stop();
	}).after(2000, function() {
		this.clockwise(.2);
	}).after(3000, function() {
		this.stop();
	}).after(2000, function() {
		exports.patrol(client);
		return client;
	});
};
