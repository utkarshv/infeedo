"use strict";

//========================== Class Definitions Start =====================

class Exceptions {
    constructor(errorCode, msg, errStackTrace) {
        this.errorCode = errorCode;
        this.message = msg;
        if (errStackTrace) {
            this.errors = errStackTrace;
        }
    }
}

//========================== Class Definitions End =======================

//========================== Export module start ==================================

module.exports = Exceptions;

//========================== Export module end ==================================
