//引入express
const express = require('express')
const path = require('path')
// const template=require('art-template')
//创建服务器
const app = express()
// 监听请求
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'./views/index.html'))
    res.sendFile('./views/index.html',{root:__dirname})
})
// 开启服务器
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})