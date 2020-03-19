const express = require('express')
require('../db/model/connect')
const User = require('../db/model/emp')
const admin = express.Router()
admin.get('/admin', async (req, res) => {
    const users = await User.find()
    res.send(users)
})

module.exports = admin