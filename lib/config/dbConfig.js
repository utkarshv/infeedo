// "use strict"

//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const mongoose = require('mongoose');

// plugin bluebird promise in mongoose
mongoose.Promise = require('bluebird');

//=================================== Load Modules end =====================================


// Connect to Db
function connectDb(env, callback) {
    let dbName = env.mongo.dbName;
    let dbUrl = env.mongo.dbUrl;
    let dbOptions = env.mongo.options;
    if (env.isProd) {
        console.log("configuring db in " + env.TAG + " mode");
        dbUrl = dbUrl + dbName;
    } else {
        console.log("configuring db in " + env.TAG + " mode");
        dbUrl = dbUrl + dbName;
        // mongoose.set('debug', true);
    }

    console.log("connecting to -> " + dbUrl);
    mongoose.connect(dbUrl, dbOptions);

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        console.log('connected to DB', dbName, 'at', dbUrl);
        callback()
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('DB connection error: ' + err);
        callback(err)
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('DB connection disconnected');
        callback("DB connection disconnected")
    });
}

module.exports = connectDb;
