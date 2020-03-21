const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name: {type:String},
    avatar: {type:String},
});

module.exports = mongoos.model("Hero",schema);