// Initilize redis connection
 // var RuleBook = require("../admin/ruleBook");
var express = require('express'),
	app = express();

// Load user routes
const userRoute = require('../user/userRoute');
//========================== Load Modules End ==============================================

//========================== Export Module Start ====== ========================

module.exports = function (app) {
    // Attach User Routes
    app.use('/infeedo/api/v1/user', userRoute);
};