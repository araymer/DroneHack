

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var decision = require('./Flight/decision');

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


data = decision.data(client);
console.log(data);


var testLed = decision.lightShow(client);
var testNav = decision.navdata(client);
