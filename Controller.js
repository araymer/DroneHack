

var arDrone = require('ar-drone');
var decision = require('./Flight/decision');

var client = arDrone.createClient();
var data;

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


var dataLoop = setInterval(function() {
	data = decision.data(client);	
	console.log(data);
}, 33);


