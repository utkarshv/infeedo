const NodeGeocoder = require('node-geocoder'),
	Promise = require('bluebird'),
	request = require('request');

const config = require('../lib/config');

var options = {
	provider: 'google',
	// Optional depending on the providers
	httpAdapter: 'https', // Default
	apiKey: config.cfg.googleAPIKey, // for Mapquest, OpenCage, Google Premier
	formatter: null         // 'gpx', 'string', ...
}

var geocoder = NodeGeocoder(options);

function getFullAddress(value){
	return new Promise(function(resolve, reject){
		geocoder.geocode(value, function(error, result){
			if(error){
				reject(error);
			}
			else{
				let fullAddress = {
					formattedAddress: result[0].formattedAddress,
					latitude: Number(result[0].latitude),
					longitude: Number(result[0].longitude),
					country: result[0].country,
					countryCode: result[0].countryCode,
					city: result[0].city,
					zipcode: result[0].zipcode ? parseInt(result[0].zipcode) : null,
					streetName: result[0].streetName,
					streetNumber: result[0].streetNumber ? parseInt(result[0].streetNumber) : null
				}
				resolve(fullAddress);
			}
		});
	});
}

function convertISODateToTimestamp(value){
	var date = new Date(value);
	return date.getTime();
}

function getTimeByCountry(value, index){
	// Request
	return new Promise(function(resolve, reject){
		request('https://timezoneapi.io/api/address/?' + value, function(error, response, data){
			// Parse
			var data = JSON.parse(data);

			// Request OK?
			if(error){
				reject(error);
			}
			else if(data.meta.code == '200'){
				// Log
				// console.log(JSON.stringify(data));

				// Example: Get the city parameter
				var city = data.data.addresses[0].city;

				// Example: Get the users time
				// var time = data.data.addresses[0].datetime.date_time_txt;
				// var time = convertISODateToTimestamp(data.data.addresses[0].datetime.date_time_ymd);
				var arr = data.data.addresses[0].datetime.date_time_ymd.split('T');
				var time = arr[0] + "T08:00:00" + data.data.addresses[0].datetime.offset_gmt;
				// var time = data.data.addresses[0].datetime.hour_24_wilz;
				resolve({time:time, index:index});
			}
		});
	});
}

// ========================== Export Module Start ==========================
module.exports = {
	getFullAddress,
	convertISODateToTimestamp,
	getTimeByCountry
}
// ========================== Export Module End ============================