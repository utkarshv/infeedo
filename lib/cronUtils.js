const cron = require('node-cron');

const config = require('./config'),
	requestClient = require('./requestClient');

var baseUrl = config.cfg.protocol + '://' + config.cfg.ip + ':' + config.cfg.port + "/infeedo/api/v1/";

// this will execute on the server time at 00:01:00 each day by server time
var task = cron.schedule('00 01 00 * * *', function(){
	// var task = cron.schedule('* * * * *', function(){
	console.log("this will execute on the server time at 00:01:00 each day by server time");

	requestClient.GET(baseUrl + 'user/cron-for-find-user-with-timezone');
}, false);
task.start();