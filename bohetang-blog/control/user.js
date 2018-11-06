const moment = require('moment')
const conn=require('../db/db.js')


const handleRegisterGet=(req, res) => {
    res.render('./user/register.ejs', {})
}

const handleLoginGet=(req, res) => {
    res.render('./user/login.ejs', {})
}

const handleRegisterPost=(req, res) => {
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
}

const handleLoginPost=(req,res)=>{
    const user=req.body
    const sql='select * from users where username=? and password=?'
    conn.query(sql,[user.username,user.password],(err,result)=>{
        if(err || result.length!=1) return res.status(502).send({
            status: 502,
                msg: '登录失败!请重试!'
        })
        //把登录成功的信息挂载到session上
        req.session.user=result[0]
        req.session.isLogin=true
        //设置cookie存在时间
        req.session.cookie.maxAge = 1000*60*60*24*30
        res.send({
            status: 200,
            msg: '登录成功!'
        })
    })
}

const handleLogoutGet=(req, res) => {
    req.session.destroy(err=>{
        res.redirect('/')
    })
}
module.exports={
    handleRegisterGet,
    handleLoginGet,
    handleRegisterPost,
    handleLoginPost,
    handleLogoutGet
}