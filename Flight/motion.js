var arDrone = require('ardrone-autonomy');

var exports = module.exports = {};

/**************************************************
MOTION FUNCTIONS
	These functions all return the client to allow
	chaining of functions in a builder pattern.
	These functions are meant to dictate which motions
	that should be performed under different
	circumstances.
***************************************************/
/*Takeoff and landing included to return the client
 *	upon callback to allow it to fit into the builder
 *	pattern.
 */
exports = {

	takeoff: function (client) {
		var takeoffCallback = function() {return client;};
		client.takeoff(takeoffCallback);
	},

	land: function (client) {
		var landCallback = function() {return client;};
		client.land(landCallback);
	},

<<<<<<< HEAD
=======

>>>>>>> 752343de5edf890dcde7194f01859df6f364d163
	//Begins patrol (moving forward)
	patrol: function (client) {
		client.front(1);
		return client;
	},
<<<<<<< HEAD

//Begins patrol (moving forward)
exports.patrol = function (client) {
	client.front(1);
	return client;
}

//Turns the drone right 90 degrees. We do not strafe.
exports.right = function (client) {
	client.stop();
	client.after(1000, function() {
		mission.cw(90).run();
	});
	return "RIGHT";
};

//Turns the drone left 90 degrees. We do not strafe.
exports.left = function (client) {
	client.stop();
	client.after(1000, function() {
		mission.ccw(90).run();
	});
	return "LEFT";
};

//Ascends the drone
exports.up = function (client, duration) {
	client.stop();
	client.after(1000, function() {
		client.up(.2);
	}).after(duration, function() {
		client.stop();
	})
};

//Descends the drone
exports.down = function (client, duration) {
	client.stop();
	client.after(1000, function() {
		client.down(.2);
	}).after(duration, function() {
		client.stop();
	})
};

//Stops all movement and hovers
exports.stop = function (client) {
	client.stop();
	return client;
}

=======

>>>>>>> 752343de5edf890dcde7194f01859df6f364d163
	//Turns the drone right 90 degrees. We do not strafe.
	right: function (client) {
		client.stop();
		client.after(1000, function() {
			mission.cw(90).run();
		});
		return client;
	},

	//Turns the drone left 90 degrees. We do not strafe.
	left: function (client) {
		client.stop();
		client.after(1000, function() {
			mission.ccw(90).run();
		});
		return client;
	},

	 up: function (client, duration) {
	 	client.stop();
	 	client.after(1000, function() {
	 		client.up(.2);
	 	}).after(duration, function() {
	 		client.stop();
	 	})
	},
	 
	 //Descends the drone
	 down: function (client, duration) {
	 	client.stop();
	 	client.after(1000, function() {
	 		client.down(.2);
	 	}).after(duration, function() {
	 		client.stop();
	 	})
	 },
 
	//Stops all movement and hovers
	stop: function (client) {
		client.stop();
		return client;
	},

	/*
	 * Should be performed when the right IR sensor
	 * OR BOTH SENSORS detect an incoming obstacle.
	 */
	avoidLeft: function (client) {
		client.stop();
		client.after(2000, function() {
			//this.counterClockwise(.2);
			mission.ccw(90).run();
		}).after(3000, function() {
			this.stop();
		}).after(2000, function() {
			this.front(1);
		}).after(2000, function() {
			this.stop();
		}).after(2000, function() {
			//this.clockwise(.2);
			mission.cw(90).run();
		}).after(3000, function() {
			this.front(1);
			return client;
		});
	},

	/*
	 * Should be performed when the left IR sensor
	 * detects an incoming obstacle.
	 */
	avoidRight: function (client) {
		client.stop();
		client.after(2000, function() {
			//this.clockwise(.2);
			mission.cw(90).run();
		}).after(3000, function() {
			this.stop();
		}).after(2000, function() {
			this.front(1);
		}).after(2000, function() {
			this.stop();
		}).after(2000, function() {
			//this.counterClockwise(.2);
			mission.ccw(90).run();
		}).after(3000, function() {
			this.front(1);
			return client;
		});
	},

	/*
	 * Turns around a full 180 degrees. Useful if the drone finds
	 * itself stuck and unable to continue forward.
	 */
	turnAround: function (client) {
		client.stop();
		client.after(2000, function() {
			mission.cw(180).run();
		}).after(3000, function() {
			this.stop();
		}).after(2000, function() {
			this.front(1);
			return client;
		});
	}
}
