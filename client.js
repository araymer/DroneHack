var net = require('net');
var client = new net.Socket();
var irFlags;

var exports = module.exports = {

	startUp: function() {
		client.connect(9500, '192.168.1.1', function() {
			console.log('Connected');
		});
		client.on('data', function(data) {
			console.log('Received: ' + data);
			irFlags = JSON.parse(data);
		});
		client.on('close', function() {
		console.log('Connection closed');
	});

	},

}

exports.obstacleSensors = irFlags;

// exports.startUp();



