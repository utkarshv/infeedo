const _ = require('lodash'),
	request = require('request-promise'),
	constant = require('./constants');

const REQUEST_METHOD = {
	GET: 'GET',
	POST: 'POST'
}

/**
*
* @param url
* @param params
* @param headers
* @return {Promise|*}
* @private
*/
function _get(url, params, headers, doNotThrowError){
	return prepareAndMakeRequest(url, REQUEST_METHOD.GET, params, headers, doNotThrowError);
}

/**
*
* @param url
* @param params
* @param headers
* @return {Promise|*}
* @private
*/
function _post(url, params, headers, doNotThrowError){
	return prepareAndMakeRequest(url, REQUEST_METHOD.POST, params, headers, doNotThrowError);
}


/**
*
* @param url
* @param method
* @param data
* @param headers
* @return {Promise|*}
*/
function prepareAndMakeRequest(url, method, data, headers, doNotThrowError){
	return makeRequest(generateRequestData(url, method, data, headers), doNotThrowError);
}

/**
* Finally Make Request
* @param options
* @param headers
* @return {Promise|*}
* @private
*/
function makeRequest(options, doNotThrowError){
	// Finally Hit Server
	return request(options).then(function(body){
		// request succeeded...
		return body;
	}).catch(function(err){
		// request failed...
		if(!doNotThrowError){
			throw err;
		}
		// Otherwise return nothing..null
	});
}

/**
* Generate options depending upon request
* @param method
* @param url
* @param data
* @return {{method: *, uri: *, headers: {}, json: boolean}}
*/
function generateRequestData(url, method, data, headers){
	var options = {
		method: method ,
		uri: url, // url to hit
		headers: {},
		json: true, // Automatically parses the JSON string in the response
	}
	// Validate Data
	data = _.isEmpty(data) ? constant.EMPTY_OBJECT : data;

	// Add Data to request
	switch(method){
		case REQUEST_METHOD.GET:
			options.qs = data;
			break;
		case REQUEST_METHOD.POST:
			options.form = data;
			options.headers =  {
				'content-type': 'application/x-www-form-urlencoded'
			}
			break;
	}
	// If headers provided use them
	_.isEmpty(headers) ? constant.DO_NOTHING : options.headers = _.assign(options.headers, headers);
	return options;
}

// ========================== Export Module Start ==========================
module.exports = {
	GET: _get,
	POST: _post
}
// ========================== Export Module End ============================