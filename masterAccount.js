const mongoose = require('mongoose');

const masterAccount = new mongoose.Schema({
    "userId": {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    "balance": {type: Number, required: true},
    "createdAt": {type: Number, required: true},
    "updatedAt": {type: Number, required: true}
})

module.exports = mongoose.model('masterAccount', masterAccount);