const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name: {type:String}
});

module.exports = mongoos.model("Category",schema);