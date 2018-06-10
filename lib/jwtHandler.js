// load all dependencies
var Promise = require("bluebird");
var jwt = Promise.promisifyAll(require("jsonwebtoken"));
var exceptions = require('./customeException')
var appConstants = require('./constants');
// var redisClient = require("./redisClient/init");
var TOKEN_EXPIRATION_SEC = appConstants.TOKEN_EXPIRATION_TIME * 60;

var EMAIL_LINK_EXP_TIME = '2d'
var JWT_ALGORITHM = 'RS256';
var JWT_SECRET_KEY = "login_secret_key_to_save_data";
 
var genUsrToken = function (user, setExpire) {
    var options = {};
    return jwt.signAsync(user, JWT_SECRET_KEY, options)
        .then(function (jwtToken) {
            return jwtToken;
        })
        .catch(function (err) {
            throw new exceptions.tokenGenException()
        })
}

var genAdminToken = function (admin, setExpire) {
    var options = {};
    return jwt.signAsync(admin, JWT_SECRET_KEY, options)
        .then(function (jwtToken) {
            return jwtToken;
        })
        .catch(function (err) {
            throw new exceptions.tokenGenException()
        })
}

var verifyUsrToken = function (acsTokn) {
    return jwt.verifyAsync(acsTokn.authorization, JWT_SECRET_KEY)
        .then(function (tokenPayload) {
            this.tokenPayload = tokenPayload;
            return tokenPayload;
        })
        .then(function(reply) {
            if(reply) 
                return this.tokenPayload;
            else 
                throw err;
        })
        .catch(function (err) {
            throw new exceptions.unauthorizeAccess(err);
        })
}

var verifyUsrForgotPassToken = function (acsTokn) {
    return jwt.verifyAsync(acsTokn, JWT_SECRET_KEY)
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            throw new exceptions.unauthorizeAccess(err);
        })
}

var expireToken = function (req) {
    var token = req.get('accessToken');
    console.log(token);
    if (token) {
        //blacklist token in redis db
        //it will be removed after 6 months
        redisClient.setValue(token, true);
        redisClient.expire(token, TOKEN_EXPIRATION_SEC);
    }
    console.log("fine");
}
module.exports = {
    genUsrToken: genUsrToken,
    verifyUsrToken: verifyUsrToken,
    expireToken : expireToken,
    genAdminToken: genAdminToken,
    verifyUsrForgotPassToken
}
