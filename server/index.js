const express = require("express")
const app = express()

app.use(require('cors')())
//app.use(express.json) 曾经这样写导致 出现访问一直timeout的问题
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./routes/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
    console.log("http://localhost:3000");
});