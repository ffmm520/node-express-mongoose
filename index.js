const express = require('express')
const admin = require('./route/admin')
const User = require('./db/model/emp')
const app = express()
app.use(express.json())

app.use('/find', admin)
app.get('/', (req, res) => {
    res.send('welcome home page')
})
app.get('/list/:name', async (req, res) => {
    let name = req.params.name
    const user = await User.findOne({"name": name})
    res.send(user)
})


app.listen(3000, () => {
    console.log('start up at 3000');
    
})
