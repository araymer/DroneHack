
var exports = module.exports = {};


exports.takeoff = function takeoff(client) {
	client.takeoff();
	setTimeout(function() {
		client.land();
	}, 500);
}

