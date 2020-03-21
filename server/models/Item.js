const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name: {type:String},
    icon: {type:String},
});

module.exports = mongoos.model("Item",schema);