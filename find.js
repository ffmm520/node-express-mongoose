// 引入mongoose
const mongoose = require('mongoose')
const express = require('express')

// 连接数据库
const app = express()

// route
app.use(express.json())
//app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('hello express')
})
app.get('/json', (req, res) => {
    console.log(req.query)
    res.send({name:"zhangan", age:"24"})
})
app.post('/add', (req, res) => {
    console.log(req.body)
    res.send('hello')
})

app.listen(3001, () => {
    console.log('start at port 3001')
})