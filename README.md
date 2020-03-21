#### TODO 
1. nodemon 是什么,有什么作用

2.el-select v-model 要另外写,要不然选择后无法绑定到选择框上
```
<el-select v-model="model.categories">
    <el-option
        v-for="item of categories"
        :label = "item.name"
        :value = "item._id"
        :key = "item._id"
    ></el-option>
</el-select>
```

#关于mongodb的使用(阿里云)
阿里云需要开放安全组及开放端口

1、开放端口
firewall-cmd --zone=public --add-port=27017/tcp --permanent   # 开放27017端口
firewall-cmd --zone=public --remove-port=27017/tcp --permanent  #关闭27017端口
firewall-cmd --reload   # 配置立即生效

2、查看防火墙所有开放的端口
firewall-cmd --zone=public --list-ports

### 使用inflection
使用inflection组件库解决类名复数的转换
```
npm i inflection
```