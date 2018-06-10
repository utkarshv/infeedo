const Job = require('./jobModel');

function createJobs(params){
	return Job.create(params);
}

// ========================== Export Module Start ==========================
module.exports = {
	createJobs
}
// ========================== Export Module End ============================