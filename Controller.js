

var decision = require('./Flight/decision');
var client = require('./client');



/**
* @param client the client to the drone
* Simple call for executing whatever the current decision is.
*
**/
function executeIt(client) {
	decision.current(client);
}

/**
 param client - the client to the drone.
* @return the nav data from the drone.
* gets and returns the nav data for the drone.
**/
function getData(client) {
	return decision.data(client);
}

// var test = decision.data();

// test(client);
var test = decision.takeoff(client);





