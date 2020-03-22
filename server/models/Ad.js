const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name:{type:String},//名称
    items:[{
        image:{type:String},
        url:{type:String},
    }]
});

module.exports = mongoos.model("Ad",schema);