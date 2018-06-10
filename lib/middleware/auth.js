"use strict";

//========================== Load Modules Start ===========================
var Promise = require("bluebird");
//========================== Load internal Module =========================
var exceptions = require("../customeException.js");
var jwtHandler = require("../jwtHandler");
var constants = require("../constants");
const resHndlr = require("../global/Responder");
//========================== Load Modules End =============================

var __verifyTok = function (acsTokn) {
    return jwtHandler.verifyUsrToken(acsTokn)
        .then(function (tokenPayload) {
            console.log("__1",tokenPayload)
            return tokenPayload;
        })
        .catch(function (err) {
             // console.log("__2",err)
            throw err
        })
};

var expireToken = function(req, res, next) {
    
    return jwtHandler.expireToken(req)
    .then(function(result) {
        return result;
        next();
    })
    .catch(function (err) {
            next(err)
        })
}

var __verifyAppVersion = function (app_version) {
    if (app_version && !Number.isInteger(app_version)) {
        app_version = parseInt(app_version);
    }
    return versionDao.getLatestVersion()
        .then(function (version) {
            let current_version;
            if (version.length > 0) {
                current_version = version[0].current_version;
            }
            if (app_version < current_version) {
                throw exceptions.invalidAppVersion();
            }
            return version;
        })
};

var autntctTkn = function (req, res, next) {
    var acsToken = req.headers;
    __verifyTok(acsToken)
        .bind({})
        .then(function (tokenPayload) {
            console.log("0",tokenPayload);
            return tokenPayload;
        })
        // .then(function (paylod) {
        //     console.log("1",paylod);
        //     this.payload = paylod;
        //     var app_version = req.get('app_version');
        //     let verifyAppVersion = __verifyAppVersion(app_version);
        //     return verifyAppVersion;
        // })
        .then(function (result) {
            console.log("2",result);
            req.user = this.payload;
            next()
        })
        .catch(function (err) {
            return resHndlr.apiResponder(req, res, err.errors, 400)
        })
}

var getISO = function(req, res, next) {
    var ISO = req.get('countryISO');
    console.log('ISO----------',ISO);
    return ISO;
}

var verifyAppVersion = function (req, res, next) {
    var app_version = req.get('app_version');
    return __verifyAppVersion(app_version)
        .then(function (result) {
            next()
        })
        .catch(function (err) {
            next(err)
        })
}

//========================== Export Module Start ===========================

module.exports = {
    autntctTkn,
    verifyAppVersion,
    getISO,
    expireToken
};

//========================== Export Module End ===========================
