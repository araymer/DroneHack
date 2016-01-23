var exports = module.exports = {};
var arDrone = require('ar-drone');
var client = arDrone.createClient();
<<<<<<< Updated upstream
exports = client;

client.takeoff();
setTimeout(function(){
				client.land();
			}, 500);
=======
exports.client = client;
client.createRepl();
>>>>>>> Stashed changes
