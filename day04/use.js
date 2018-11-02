//引入express
const express = require('express')
const path = require('path')
// const template=require('art-template')
//创建服务器
const app = express()
// 监听请求
app.use(express.static('./ejs'))
// 开启服务器
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})