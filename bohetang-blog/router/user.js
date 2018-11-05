const express = require('express')
const router=express.Router()
const moment = require('moment')
//链接数据库
const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '127.0.0.1',
    database: 'blog',
    user: 'root',
    password: 'root'
})

// 注册解析表单数据的中间件
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({
    extended: false
}))

//展示注册和登录页面
router.get('/register', (req, res) => {
    res.render('./user/register.ejs', {})
})
router.get('/login', (req, res) => {
    res.render('./user/login.ejs', {})
})

//注册
router.post('/register', (req, res) => {
    const user = req.body
    // console.log(user)
    //判断信息是否完整
    if (user.username.trim().length == 0 || user.password.trim().length == 0 || user.nickname.trim().length == 0) {
        return res.status(501).send({
            status: 501,
            msg: '请填写完整信息!'
        })
    }
    //查询用户名是否重复
    const sql1 = 'select count(*) as count from users where username=?'
    conn.query(sql1, user.username, (err, result) => {
        if (err) return res.status(500).send({
            status: 500,
            msg: '用户名查重失败!'
        })
        // res.send(result)
        if (result[0].count == 1) {
            return res.status(402).send({
                status: 402,
                msg: '该用户名已被注册!请重试!'
            })
        }
        //获取当前时间
        user.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
        //添加数据到数据库
        const sql2 = 'insert into users set ?'
        conn.query(sql2, user, (err, result) => {
            if (err || result.affectedRows != 1) return res.status(500).send({
                status: 500,
                msg: '添加失败!请重试!'
            })
            res.send({
                status: 200,
                msg: '添加成功!'
            })
            
        })
    })
})

//登录
router.post('/login',(req,res)=>{
    const user=req.body
    const sql='select * from users where username=? and password=?'
    conn.query(sql,[user.username,user.password],(err,result)=>{
        if(err || result.length!=1) return res.status(502).send({
            status: 502,
                msg: '登录失败!请重试!'
        })
        res.send({
            status: 200,
            msg: '登录成功!'
        })
    })
})

module.exports=router