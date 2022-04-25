const mongoose = require('mongoose');

const fixedAccount = new mongoose.Schema({
    "account_number": {type: Number, required: true, unique: true},
    "balance": {type: Number, required: true},
    "interestRate": {type: Number, required: true},
    "startDate": {type: String, required: true},
    "maturityDate": {type: String, required: true},
    "createdAt": {type: Number, required: true},
    "updatedAt": {type: Number, required: true}
})

module.exports = mongoose.model('fixedAccount', fixedAccount);