
var exports = module.exports = {};

var state = "STANDBY";
/*States:
STANDBY, HOVER, FORWARD, BACK, LEFTTURN, RIGHTTURN, LEFT, RIGHT, UP, DOWN,
LANDING, TAKEOFF
*/

function backup(client) {
	client.stop();
	client.after(2000, function() {
		this.back(.2);
	}).after(2000, function() {
		this.stop();
	}).after(2000, function() {
		this.clockwise(.2);
	}).after(3000, function() {
		this.front(.2);
	});
}

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
	client.after(5000, null);
};

exports.land = function (client) {
	state = "LANDING";
	var landingCallback = function() {state = "STANDBY"};
	client.land(landingCallback);
};

exports.ascend = function (client, speed, time) {
	state = "UP";
	client.up(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.descend = function (client, speed, time) {
	state = "DOWN";
	client.down(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.turnLeft = function (client, speed, time) {
	state = "LEFTTURN";
	client.counterClockwise(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.turnRight = function (client, speed, time) {
	state = "RIGHTTURN";
	client.clockwise(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.moveForward = function (client, speed, time) {
	state = "FORWARD";
	client.front(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.moveBackward = function (client, speed, time) {
	state = "BACK";
	client.back(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.moveLeft = function (client, speed, time) {
	state = "LEFT";
	client.left(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.moveRight = function (client, speed, time) {
	state = "RIGHT";
	client.right(speed);
	client.after(time, function () {
		client.stop();
		state = "HOVER";
	});
};

exports.stop = function (client) {
	state = "HOVER";
	client.stop();
};
