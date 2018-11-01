//引入express
const express = require('express')
const path = require('path')
const template=require('art-template')
//创建服务器
const app = express()
// 监听请求
app.get('/', (req, res) => {
    let url = req.url
    if (url == '/') {
        url = '/views/index.html'
    }
    const html = template(path.join(__dirname, url), {
        name: 'zs',
        age: 18
    })
    res.end(html)
})
// 开启服务器
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})