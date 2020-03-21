const mongoos = require('mongoose')

const schema = new mongoos.Schema({
    name: {type:String},
    avatar: {type:String},
    title:{type:String},//称号
    categories:[{type:mongoos.SchemaTypes.ObjectId,ref:'Category'}],//支持多个分类
    scores:{
        difficult:{type:Number},//难度等级
        skills:{type:Number},//技能评分
        attack:{type:Number},//攻击评分
        survive:{type:Number},//生存评分
    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String},
    }],
    items1:[{type:mongoos.SchemaTypes.ObjectId,ref:'Item'}],//顺风出装
    items2:[{type:mongoos.SchemaTypes.ObjectId,ref:'Item'}],//逆风出装
    usageTips:{type:String},//使用技巧
    battleTips:{type:String},//对战技巧
    teamTips:{type:String},//团战技巧
    partners:[{
        hero:{type:mongoos.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String},
    }],
});

module.exports = mongoos.model("Hero",schema);