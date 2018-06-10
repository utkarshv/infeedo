module.exports = {
    environment: 'development',
    ip: 'localhost',
    port: 5000,
    protocol : 'http',
    TAG: "development",
    mongo: {
        dbName: 'infeedo',
        dbUrl: "mongodb://127.0.0.1:27017/",
        options: {
            user: "",
            pass: "",
            // server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
            // replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
        }
    },
    iamUser : {
        accessKey : 'zS9da31x9+Kw+i0flTFpxC5cE1zEWH9uHroDrZVF',
        keyId : 'AKIAJ6L3U7P5W2LTLGQQ',
    },
    // option parameters constantys for s3
    isDev:true

    //Form Dynamic Values Depending on ENV
   
}
