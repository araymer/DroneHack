var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

mission.takeoff()
       .zero()       // Sets the current state as the reference
       .altitude(1)  // Climb to altitude = 1 meter
       .go(x: 2, y: 2)
	   .go(x: 2, y: -2)
	   .go(x: -2, y: -2)
	   .land();

mission.run(function (err, result)
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});
