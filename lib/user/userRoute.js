const responseHandler = require("../global/Responder"),
	userFacade = require('./userFacade'),
	userRoute = require('express').Router();

userRoute.route('/createUser').post(function(request, response){
	var {name, email, address, clientId, userType} = request.body;
	userFacade.createUser({name, email, address, clientId, userType})
		.then(function(result){
			return response.json({responseCode:200, responseMessage:result.responseMessage});
		});
});

userRoute.route('/cron-for-find-user-with-timezone').get(function(request, response){
	userFacade.cronForFindUserWithTimezone()
		.then(function(result){
			return response.json({responseCode:200, responseMessage:result.responseMessage, result:result.result});
		});
});

// ========================== Export Module Start ==========================
module.exports = userRoute;
// ========================== Export Module End ============================