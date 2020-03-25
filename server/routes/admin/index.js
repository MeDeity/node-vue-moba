module.exports = app =>{
    const express = require('express')
    const router = express.Router({
        mergeParams:true //重要 合并URL参数 父级 子级的参数都可以访问到
    });
    
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser');
    const assert = require('http-assert')
    
    //登录校验中间件
    const authMiddleware = require('../../middleware/auth')

    const resourceMiddleware = require('../../middleware/resource')
    //创建资源
    router.post('/',async (req,res)=>{
        const model = await req.Model.create(req.body);
        res.send(model)
    });

    //修改资源
    router.put('/:id',async (req,res)=>{
        await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send({
            success:true
        })
    });

    //删除资源
    router.delete('/:id',async (req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body);
        res.send(model)
    });

    //获取分类列表
    router.get('/',authMiddleware(), async (req,res)=>{
        let queryOptions = {};
        console.info("Model:"+JSON.stringify(req.Model));
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent';
        }
        const items = await req.Model.find().setOptions(
            queryOptions
        ).limit(10);
        res.send(items)
    });

    //获取分类(根据ID)
    router.get('/:id',async (req,res)=>{
        const item = await req.Model.findById(req.params.id);
        res.send(item)
    });

    const multer = require('multer');
    const upload = multer({dest:__dirname+'/../../uploads'});

    app.post('/admin/api/upload',upload.single('file'),authMiddleware(),async(req,res)=>{
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });


    app.use('/admin/api/rest/:resource',authMiddleware(),resourceMiddleware(),router);

    app.post('/admin/api/login',async (req,res)=>{
        const {username,password} = req.body;
        //根據用戶名找用戶,校驗密碼，返回token
        
        const user = await AdminUser.findOne({
            username:username
        }).select('+password');
        assert(user,403,'用户名或密码错误');
        const isValid = require('bcryptjs').compareSync(password,user.password)
        if(!isValid){
            assert(user,403,'用户名或密码错误');
        }
        //返回token
        
        const token = jwt.sign({id:user._id},app.get('secret'));
        res.send({token})
    });

    //错误处理函数
    app.use(async(err,req,res,next)=>{
        console.info("错误处理函数"+JSON.stringify(err));
        res.status(err.statusCode||500).send({
            message:err.message
        });
        // await next();// 已经没必要继续往下执行了
    });
}