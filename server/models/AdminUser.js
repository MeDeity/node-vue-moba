const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    username:{type:String},//用户名称
    
    password:{type:String,
        select:false,//设置密码不会被查询出来，以防止被多次散列
        set(val){//对密码进行散列
        return require('bcryptjs').hashSync(val,10)//bcrypt 好像过不去 所以使用了bcryptjs
    }},//密码
});

module.exports = mongoos.model("AdinUser",schema);