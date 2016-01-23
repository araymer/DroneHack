var exports = module.exports = {};
var arDrone = require('ar-drone');
var client = arDrone.createClient();
exports = client;

client.takeoff();
setTimeout(function(){
				client.land();
			}, 500);
