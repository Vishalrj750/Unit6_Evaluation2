const express = require('express');
const app =  express();
const userModel = require('./user');
const branchDetailModel = require('./branchDetail');
const masterAccountModel = require('./masterAccount');
const savingAccountModel = require('./savingAccount');
const fixedAccountModel = require('./fixedAccount');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');

app.use(bodyParser.json([]));

app.post('/user', async (req, res, next) => {
    const userDetail = req.body;
    const response = await userModel.insertMany([userDetail]);
    const masterAccount = {
        userId: response[0]._id,
        balance: req.body.masterAccount.balance,
        createdAt: req.body.masterAccount.createdAt,
        updatedAt: req.body.masterAccount.updatedAt
    }
    await masterAccountModel.insertMany([masterAccount]);
    res.json(response);
})


app.get('/master/:userId', async (req, res, next) => {
    const response = await masterAccountModel.find({userId: mongoose.Types.ObjectId(req.params.userId)}).populate('userId');
    res.json(response);
})

module.exports = app;