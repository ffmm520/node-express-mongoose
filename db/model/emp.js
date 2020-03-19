const mongoose = require('mongoose')
// require('./connect')
// 集合规则
const empSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    age: {
        type: Number,
        min:1,
        max: 120
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 12
    },
    email: String,
    hobbies: [String]
})
// 创建集合
const User = mongoose.model('User', empSchema)
module.exports = User
// console.log(Emp.find())