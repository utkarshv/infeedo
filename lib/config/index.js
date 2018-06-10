const _ = require("lodash");
const dbConfig = require("./dbConfig");
const expressConfig = require("./expressConfig");
const path = require("path");
require('dotenv').config()
var envConfig = {};
var cfg = {};
 
var environment = process.env.NODE_ENV || '';
console.log(environment);
//ENV Config
switch (environment) {
    case 'dev' :
    case 'development' :
        envConfig = require('./env/development');
        break;
    case 'prod' :
    case 'production' :
        envConfig = require('./env/production');
        break;
    case 'stag' :
    case 'staging' :
        envConfig = require('./env/staging');
        break;

}

var defaultConfig = {
    environment: "development",
    ip: 'localhost',
    port: 4000,
    protocol : 'http',
    TAG: "development",
    mongo: {
        dbName: 'infeedo',
        dbUrl: "mongodb://127.0.0.1:27017/",
        options: {
            user: "",
            pass: "",
            // server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
            // replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
        }
    },
    redis: {
        server: 'localhost',
        port: 6379
    },

    iamUser : {
       accessKey : 'O0OD6vwqVSy/czlPHl3WjUcH7Fnng3V7IXrkyDZW',
        keyId : 'AKIAJWRJBAJOUCDOBMPQ',
    },
    googleAPIKey: "AIzaSyDR4GfadT0-4hziubZvqWsPHLenwfPLdso",
    // option parameters constantys for s3,

    //Form Dynamic Values Depending on ENV
}
//Create Final Config JSON by extending env from default
var cfg = _.extend(defaultConfig, envConfig);


//Export config module
module.exports = {
    cfg,
    dbConfig,
    expressConfig,
    defaultConfig
}
