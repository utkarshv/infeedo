var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	constant = require('../constants');

var jobSchema = new Schema({
		userId:{
			type:mongoose.Schema.Types.ObjectId,
			ref:constant.DB_MODEL_REF.USER
		},
		name:{type:String},
		email:{type:String},
		sleepUntil:{type:Date},// time will be UTC but written as 'T'
		autoRemove:{type:Boolean, default:true}
	}, {
		versionKey:false,
		timestamps:true
});

// Export login history
module.exports = mongoose.model(constant.DB_MODEL_REF.JOB, jobSchema);