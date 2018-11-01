//引入HTTP fa path模块 
const http = require('http')
const fs = require('fs')
const path = require('path')
//创建HTTP服务器
const server = http.createServer()
//绑定request事件
server.on('request', (req, res) => {
    let url = req.url
    if (url == '/') {
        url = '/views/index.html'
    }
    console.log(url);
    fs.readFile(path.join(__dirname, url), (err, data) => {
        if (err) return res.end('404')
        res.end(data)
    })
    // res.end('123')

})
//开启服务器
server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})