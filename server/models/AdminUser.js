const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    username:{type:String},//用户名称
    password:{type:String},//密码
});

module.exports = mongoos.model("AdinUser",schema);