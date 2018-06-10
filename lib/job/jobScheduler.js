const MongoClient = require('mongodb').MongoClient,
	MongoCron = require('mongodb-cron').MongoCron;

const config = require('../config'),
	constant = require('../constants'),
	userFacade = require('../user/userFacade');

// Database URL
const dbUrl = config.cfg.mongo.dbUrl;
// Database Name
const dbName = config.cfg.mongo.dbName;

var event = {
	notification : function(doc){
		return userFacade.sendEmail(doc);
	}
}

// Use connect method to connect to the server
MongoClient.connect(dbUrl, {native_parser:true}, function(err, client){
	const db = client.db(dbName);

	const collection = db.collection('jobs');

	const cron = new MongoCron({
		collection,
		onDocument: (doc) => event.notification(doc),
		onError: (err) => console.log(err),
		onStart: () => console.log('started ...'),
		onStop: () => console.log('stopped'),
		nextDelay: 1000,
		reprocessDelay: 1000,
		idleDelay: 10000,
		lockDuration: 600000
	});

	cron.start(); // start processing

	/*const job = collection.insert([{ 
			name: 'Job #1',
			sleepUntil: null
		}, {
			message: 'this message is for shubham',
			sleepUntil: moment().add(3, 'seconds').toDate(),
			autoRemove: true,
		}, {
			message: 'this message is for rajat',
			sleepUntil: moment().add(5, 'seconds').toDate(),
			autoRemove: true,
	}]);*/
});