const express = require('express')
const home = express.Router()
home.get('/home', (req, res) => {
    res.send('welcome home')
})
module.exports = home