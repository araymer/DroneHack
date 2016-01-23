
var exports = module.exports = {};

var state = "STANDBY";
/*States:
STANDBY, HOVER, FORWARD, BACK, LEFTTURN, RIGHTTURN, LEFT, RIGHT, UP, DOWN,
LANDING, TAKEOFF
*/

exports.data = function(client) {
	client.on('navdata', console.log);
};

exports.lightShow = function (client) {
	client.animateLeds('blinkOrange', 3, 5);
};

exports.takeoff = function (client) {
	state = "TAKEOFF";
	var takeoffCallback = function() {state = "HOVER"};
	client.takeoff(takeoffCallback);
};

exports.land = function (client) {
	state = "LANDING";
	var landingCallback = function() {state = "STANDBY"};
	client.land(landingCallback);
};

exports.ascend = function (client, speed, time) {
	state = "UP";
	client.up(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.descend = function (client, speed, time) {
	state = "DOWN";
	client.down(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.turnLeft = function (client, speed, time) {
	state = "LEFTTURN";
	client.counterClockwise(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.turnRight = function (client, speed, time) {
	state = "RIGHTTURN";
	client.clockwise(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.moveForward = function (client, speed, time) {
	state = "FORWARD";
	client.front(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.moveBackward = function (client, speed, time) {
	state = "BACK";
	client.back(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.moveLeft = function (client, speed, time) {
	state = "LEFT";
	client.left(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.moveRight = function (client, speed, time) {
	state = "RIGHT";
	client.right(speed);
	setTimeout(function () {
		client.stop();
		state = "HOVER";
	}, time);
};

exports.stop = function (client) {
	state = "HOVER";
	client.stop();
};
