const mongoose = require('mongoose');

const branchDetail = new mongoose.Schema({
    "name": {type: String, required: true},
    "address": {type: String, required: true},
    "IFSC": {type: String, required: true},
    "MICR": {type: Number, required: true},
    "createdAt": {type: Number, required: true},
    "updatedAt": {type: Number, required: true}
})

module.exports = mongoose.model('branchDetail', branchDetail);