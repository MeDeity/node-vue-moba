module.exports = app =>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://120.27.229.28:27017/node-vue-moba',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
}