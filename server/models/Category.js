const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name: {type:String},
    parent:{type:mongoos.SchemaTypes.ObjectId, ref:'Category'},
});

module.exports = mongoos.model("Category",schema);