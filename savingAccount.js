const mongoose = require('mongoose');

const savingAccount = new mongoose.Schema({
    "account_number": {type: Number, required: true, unique: true},
    "balance": {type: Number, required: true},
    "interestRate": {type: Number, required: true},
    "createdAt": {type: Number, required: true},
    "updatedAt": {type: Number, required: true}
})

module.exports = mongoose.model('savingAccount', savingAccount);