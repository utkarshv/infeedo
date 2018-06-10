const userDao = require('./userDao');

function createUser(params){
	return userDao.createUser(params);
}

function getUsers(){
	return userDao.getUsers();
}

// ========================== Export Module Start ==========================
module.exports = {
	createUser,
	getUsers
};
// ========================== Export Module End ============================