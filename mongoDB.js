const mongoose = require('mongoose');

class mongo {

    constructor() {
        this.createConnectionToDB()
    }

    createConnectionToDB() {
        mongoose.connect('mongodb://localhost:27017/bankdb')
        mongoose.connection.once('open', () => {
            console.log('mongoDB connection successfull');
        })
        mongoose.connection.on('error', () => {
            console.log('Error occured in DB connection');
        })
    }
}

module.exports = mongo;