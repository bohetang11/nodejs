const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log(req.url)
    let url = req.url
    //解决乱码问题
    res.writeHeader(200, {
        'content-type': 'text/html;charset=utf-8'
    })

    if (url == '/' || url == '/views/index.html') {
        fs.readFile(path.join(__dirname, 'views/index.html'), (err, data) => {
            if (err) return res.end(404)
            res.end(data)
        })
    } else if (url == '/views/movie.html') {
        fs.readFile(path.join(__dirname, 'views/movie.html'), (err, data) => {
            if (err) return res.end(404)
            res.end(data)
        })
    }


})

server.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})