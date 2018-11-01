//引入HTTP path art-template模块 
const http = require('http')
const path = require('path')
const template=require('art-template')
//创建HTTP服务器
const server = http.createServer()
//绑定request事件
server.on('request', (req, res) => {
    let url = req.url
    if (url == '/') {
        url = '/views/index.html'
    }
    const html=template(path.join(__dirname,url),{name:'zs',age:18})
    res.end(html)

})
//开启服务器
server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})