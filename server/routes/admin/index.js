module.exports = app =>{
    const express = require('express')
    const router = express.Router({
        mergeParams:true //重要 合并URL参数 父级 子级的参数都可以访问到
    });
    

    router.post('/',async (req,res)=>{
        const model = await req.Model.create(req.body);
        res.send(model)
    });

    router.put('/:id',async (req,res)=>{
        await req.Model.findByIdAndUpdate(req.params.id,req.body);
        res.send({
            success:true
        })
    });

    router.delete('/:id',async (req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body);
        res.send(model)
    });

    //获取分类列表
    router.get('/',async (req,res)=>{
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

    app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
        const file = req.file;
        file.url = `http://localhost:3000/uploads/${file.filename}`;
        res.send(file);
    });

    app.use('/admin/api/rest/:resource',async (req,res,next) =>{
        const modelName = require('inflection').classify(req.params.resource);
        req.Model = require(`../../models/${modelName}`);
        next();
    },router);
}