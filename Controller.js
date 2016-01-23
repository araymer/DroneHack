

var arDrone = require('ar-drone');
var client = arDrone.createClient();

var decision = require('./Flight/decision');

var data;

/*
Test of movements using ar-drone api
*/
decision.lightShow(client);

decision.takeoff(client);
decision.turnLeft(client, .2, 1000);
decision.moveForward(client, .2, 5000);
decision.land(client);

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

//data = decision.data(client);
//console.log(data);



// test(client);
//var testLed = decision.lightShow(client);
//var testData = decision.data(client);
//var testSquare = decision.testSquare(client);
