const express = require('express')
const home = require('./route/home')
const admin = require('./route/admin')
const app = express()
app.use('/home', home)
app.use('/admin', admin)

app.listen(4000, () => {
    console.log('success at port 4000')
})