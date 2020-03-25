module.exports = ()=>{
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser');
    const assert = require('http-assert')

    return async(req,res,next)=>{
        const token = String(req.headers.authorization||'').split(' ').pop();
        assert(token,401,"用户或密码不存在")//未授权(请提供jwtToken)
        const {id} = jwt.verify(token,req.app.get('secret'))
        req.user = await AdminUser.findById(id)
        console.log("获取到的user:"+req.user);
        assert(req.user,401,"用户或密码不存在")
        await next()
    }
}