

var arDrone = require('ar-drone');
var motion = require('./Flight/motion');
var track = require('./Flight/track');
var security = require('.Security/alert');
var client = require('client');

var droneClient = arDrone.createClient();
