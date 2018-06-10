//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./model/Exception");
var constants = require("./constants");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    intrnlSrvrErr: function (err) {
        return new Exception(1, constants.MESSAGES.intrnlSrvrErr, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception(2, constants.MESSAGES.unAuthAccess, err)
    },
    tokenGenException: function (err) {
        return new Exception(3, constants.MESSAGES.tokenGenError, err)
    },
    invalidEmail: function () {
        return new Exception(4, constants.MESSAGES.invalidEmail)
    },
    invalidMobileNo: function () {
        return new Exception(4, constants.MESSAGES.invalidMobile)
    },
    getActionBlockedException () {
        return new Exception(4, constants.MESSAGES.blockedMobile);
    },
    invalidOTP: function () {
        return new Exception(4, constants.MESSAGES.invalidOtp)
    },
    getCustomErrorException: function (errMsg, error) {
        return new Exception(5, errMsg, error);
    },
    alreadyRegistered: function (err) {
        return new Exception(6, constants.MESSAGES.usernameAlrdyRegistered, err)
    },
    incorrectPass: function () {
        return new Exception(7, constants.MESSAGES.incorrectPass)
    },
    userNotFound: function (err) {
        return new Exception(8, constants.MESSAGES.userNotFound, err);
    },
    passwordLinkExpired: function () {
        return new Exception(9, constants.MESSAGES.linkExpired)
    },
    getEmailPermissionException: function () {
        return new Exception(11, constants.MESSAGES.emailPermission);
    },
    getIncorrectTwTokenException : function() {
        return new Exception(10, constants.MESSAGES.incorrectTwToken)
    },
    getCategoryAlreadyExistsException : function(name) {
        return new Exception(11, constants.MESSAGES.categoryExists.replace("{{name}}", name))
    },
    getVideoAlreadyLikedException : function() {
        return new Exception(12, constants.MESSAGES.videoAlreadyLiked)
    },
    getInvalidJwtTokenException: function () {
        return new Exception(13, constants.MESSAGES.failedToAuthenticateToken);
    },
    accountDeactivated: function () {
        return new Exception(2, constants.MESSAGES.ACCOUNT_DEACTIVATED);
    },
    invalidAccount: function () {
        return new Exception(15, constants.MESSAGES.ACCOUNT_DEACTIVATED);
    },
};

//========================== Export Module   End ===========================
