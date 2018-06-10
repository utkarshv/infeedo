module.exports = {
    environment: 'staging',
    ip: 'localhost',
    port: 4009,
    protocol : 'http',
    TAG: "staging",
    mongo: {
        dbName: 'infeedo',
        dbUrl: "mongodb://localhost:27017/",
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
    isStag: true

    //Form Dynamic Values Depending on ENV
}
