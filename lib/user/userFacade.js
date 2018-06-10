const Promise = require('bluebird');
const nodemailer = require('nodemailer');
const appUtils = require('../appUtils'),
	constant = require('../constants'),
	jobService = require('../job/jobService'),
	userService = require('../user/userService');

function createUser(params){
	return appUtils.getFullAddress(params.address)
		.then(function(fullAddress){
			params.fullAddress = fullAddress;
			return userService.createUser(params);
		})
		.then(function(){
			return {responseMessage:"User created successfully."};
		})
		.catch(function(error){
			throw error;
		});
}

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    	 user: 'ebriks.manish@gmail.com',//dummy email id for sending mail
         pass: 'manish123'//password of that dummy id
    }
});

/*
 in this function we have to send "Good Morning Email"
 to all the users every morning at 8 AM according to
 different time zones of the users;
*/
function sendEmail(params){
    var mailOptions = {
        from: 'ebriks.manish@gmail.com', //dummy email 
        to: params.email,//user email
        subject: 'Infeedo mail service!',
        html: `<center>
        <h2>good morning ${params.email}</h2></center>`
    };
    return new Promise(function(resolve, reject){
        transporter.sendMail(mailOptions, function(error, info) {
        	if(error){
        		reject(error);
        	}
           resolve(info);
        });
    });
}

function cronForFindUserWithTimezone(){
	return userService.getUsers()
		.then(function(response){
			this.response = response;
			let promiseResult = [];
			let index = i;
			let value;
			for(var i=0; i<response.length; i++){
				value = response[i].fullAddress.formattedAddress;
				index = i;
				promiseResult.push(appUtils.getTimeByCountry(value, index)
					.then(function(result){
						// if(result.time == '08'){
						// 	_sendEmail(response[result.index]);
						// }
						response[result.index].sleepUntil = result.time;
						response[result.index].autoRemove = true;
						return response;
					}));
			}
			return Promise.all(promiseResult);
		})
		.then(function(){
			return jobService.createJobs(this.response);
		})
		.then(function(response){
			return {responseMessage:"User get successfully.", result:this.response};
		})
		.catch(function(error){
			throw error;
		});
}

// ========================== Export Module Start ==========================
module.exports = {
	createUser,
	sendEmail,
	cronForFindUserWithTimezone
};
// ========================== Export Module End ============================