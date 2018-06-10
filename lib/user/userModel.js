const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const constant = require('../constants');

let userSchema = new Schema({
	name:{type:String},
	email:{type:String},
	address:{type:String},
	clientId:{
		type:mongoose.Schema.ObjectId,
		ref:constant.DB_MODEL_REF.USER
	},
	fullAddress:{
		formattedAddress:{type:String},
		latitude:{type:Number},
		longitude:{type:Number},
		country:{type:String},
		countryCode:{type:String},
		city:{type:String},
		zipcode:{type:Number},
		streetName:{type:String},
		streetNumber:{type:Number}
	},
	userType:{type:Number},//1=client and 2 = user
	sleepUntil:{},
	autoRemove:{}
});

module.exports = mongoose.model(constant.DB_MODEL_REF.USER, userSchema);