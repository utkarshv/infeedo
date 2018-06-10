const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1
}
const ACCOUNT_LEVEL = {
    ADMIN : 1,
    NORMAL_USER : 0
}
const DB_MODEL_REF = {
    USER : 'user',
    JOB: 'job'
}

const USER_TYPE = {
    CLIENT: 1,
    NORMAL_USER: 2
}

const MESSAGES = {
    intrnlSrvrErr: "Please try after some time.",
    unAuthAccess: "Unauthorized access ",
    tokenGenError: "Error while generating access token",
    invalidEmail: "Please fill valid Email Address",
    invalidMobile: "Please fill valid Mobile No",
    blockedMobile: "Action Blocked for Illegal use of Services.",
    invalidOtp: "Invalid OTP",
    nameCantEmpty: "Name can't be empty",
    invalidNum: "Please fill valid phone number or Do not add country code",
    passCantEmpty: "Password can't be empty",
    validationError : "Validation errors",
    incorrectPass: "Invalid email or passoword",
    userNotFound: "User not found.",
    accessTokenCantEmpty: "Access token cannot be empty",
    tokenSecretCantEmpty: "Secret token cannot be empty",
    deviceIdCantEmpty : "Device id cannot be empty",
    platformCantEmpty : "Platform cannot be empty or invalid",
    deviceTokenCantEmpty : "Device token cannot be empty",
    ACCOUNT_DEACTIVATED: "Your account is suspended, please contact the exchange admin: exchangeadmin@exchange.com.",
}


module.exports = Object.freeze({
    APP_NAME: 'infeedo',
    TOKEN_EXPIRATION_TIME : 60 * 24 * 60, // in mins - 60 days
    STATUS_CODE: STATUS_CODE,
    ACCOUNT_LEVEL : ACCOUNT_LEVEL,
    DB_MODEL_REF: DB_MODEL_REF,
    USER_TYPE: USER_TYPE,
    MESSAGES : MESSAGES,
    email : {
        //Credentials
        SENDER : 'alerts@infeedo.com',
        TOKEN_SEPARATOR  : '#&$',

        //constants
        OTP : '[OTP]',
        LINK : '[LINK]',
        TOKEN : '[TOKEN]',
        REASON : '[REASON]',
        POSTMESSAGE : '[POSTMESSAGE]',
        PAGEMESSAGE : '[PAGEMESSAGE]',
        USERMESSAGE : '[USERMESSAGE]',
        MEDIA : '[MEDIA]',

        subject : {
            OTP_EMAIL : 'infeedo : One Time Password',
            VERIFY_EMAIL : 'Confirm Email Address',
            FORGOT_PWD : 'Reset Password',
            FUND_REFIL_MAIL: 'infeedo: Refil your Funds',
            PROMOTION_STOPPED_MAIL: "infeedo: Promotion Stopped",
            POST_DEACTIVATED_MAIL: 'infeedo: Post Deactivated',
            PAGE_DEACTIVATED_MAIL: 'infeedo: Page Deactivated',
            USER_DEACTIVATED_MAIL: 'infeedo: Account Deactivated',
        },
        //Predefined Mail Templates
        templates : {
            VERIFY_EMAIL : "<html>\
                Click to confirm exchange ID Connect: [LINK]\
                <br/>Ignore this email if it was not requested.<br/><br/><br/>\
                Thank you,\
                <br/>infeedo Team.\
                <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
                Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
                contain information that is privileged or exempt from disclosure under applicable law.\
                If you have received this message in error please immediately notify the sender by return e-mail and delete\
                this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
                destroy any printed copy you might have made.\
                </html>"
            ,

            FORGET_PWD_EMAIL : " <html>\
                Click to reset passwod : [LINK]\
                <br/>Ignore this email if it was not requested.<br/><br/><br/>\
                Thank you,\
                <br/>infeedo Team.\
                <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
                Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
                contain information that is privileged or exempt from disclosure under applicable law.\
                If you have received this message in error please immediately notify the sender by return e-mail and delete\
                this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
                destroy any printed copy you might have made.\
                "
        }
    },

    sms : {
        OTP : '[OTP]',
        KEY : '[KEY]',
        PHONE : '[PHONE]',
        templates : {
            VERIFY_PHONE : '[OTP] is Your One Time Password for Mobile [PHONE] to your infeedo Account.\
                \n Regards, \n infeedo Team',
        }
    },
    account_deactivate_sms : {
        USERNAME : '[USERNAME]',
        REASON : '[REASON]',
        templates : {
            MSG : 'Your account (username- [USERNAME]) is suspended because [REASON], please contact the infeedo admin: infeedoadmin@infeedo.com.',
        }
    },
    masterOtpKey : 1234
});