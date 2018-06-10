const constant = require('../constants'),
	User = require('./userModel');

function createUser(params){
	// console.log(params);
	// var user = new User(params);
	return User.create(params);
}

function getUsers(){
	return User.aggregate([{'$match':{userType:constant.USER_TYPE.NORMAL_USER}}, {'$project':{userId:'$_id', name:1, email:1, _id:0, fullAddress:{formattedAddress:1}}}]);
}

// ========================== Export Module Start ==========================
module.exports = {
	createUser,
	getUsers
};
// ========================== Export Module End ============================