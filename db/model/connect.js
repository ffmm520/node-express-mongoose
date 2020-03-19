require('dotenv').config()
const mongoose = require('mongoose')
let user = process.env.USER
let pwd = process.env.PWD
let uri = process.env.URI
let port = process.env.PORT
// console.log(user, pwd, uri, port);

mongoose.connect(`mongodb://${user}:${pwd}@${uri}:${port}/emp?authSource=admin`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('数据库连接成功')).catch(err => console.log('数据库连接失败', err), )
