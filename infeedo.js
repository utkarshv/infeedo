console.log("");
console.log("//************************* Infeedo **************************//");
console.log("");

//Import dotenv
require('dotenv').config()

//Import Config
const config = require('./lib/config');
const cronUtils = require('./lib/cronUtils');
const jobScheduler = require('./lib/job/jobScheduler');

// logger.requestLogger;

config.dbConfig(config.cfg, (err) => {
    if (err) {
        logger.error(err, 'exiting the app.');
        return;
    }

    // load external modules
    const express = require("express");

    // const mediaUpload = require("./lib/mediaupload/configure")();
    // mediaUpload();

    // init express app
    const app = express();

    // set server home directory
    app.locals.rootDir = __dirname;

    // config express
    config.expressConfig(app, config.cfg.environment);

    // attach the routes to the app
    require("./lib/routes")(app);
    //require("./lib/post")(app);

    // start server
    app.listen(config.cfg.port, () => {
        console.log(`Express server listening on ${config.cfg.port}, in ${config.cfg.TAG} mode`);
    });
});