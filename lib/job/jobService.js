const jobDao = require('./jobDao');

function createJobs(params){
	return jobDao.createJobs(params);
}

// ========================== Export Module Start ==========================
module.exports = {
	createJobs
}
// ========================== Export Module End ============================