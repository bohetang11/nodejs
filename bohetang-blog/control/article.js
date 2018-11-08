const moment = require('moment')
const conn = require('../db/db.js')
const marked=require('marked')

const handleArticleGet = (req, res) => {
    if (!req.session.isLogin) return res.redirect('/')
    res.render('./article/add.ejs', {
        user: req.session.user,
        isLogin: req.session.isLogin
    })
}

const handleAddPost = (req, res) => {
    const user = req.body
    user.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    // console.log(user)
    const sql = 'insert into articles set ?'
    conn.query(sql, user, (err, result) => {
        if (err || result.affectedRows != 1) return res.send({
            status: 500,
            msg: err.message
        })
        // console.log(result)
        res.send({
            msg: '发表文章成功！',
            status: 200,
            insertId: result.insertId
        })
    })
}
const handleInfoGet = (req,res) => {
    if (!req.session.isLogin) return res.redirect('/')
    const id=req.params.id
    // console.log(id)
    const sql='select * from articles where id=?'
    conn.query(sql,id,(err,result)=>{
        if(err) return res.send({status:500,msg:err.message})
        result[0].content=marked(result[0].content)
        res.render('./article/info.ejs', {
            user: req.session.user,
            isLogin: req.session.isLogin,
            article: result[0]
        })
    })
}

const handleEditGet=(req,res)=>{
    if (!req.session.isLogin) return res.redirect('/')
    const id=req.params.id
    const sql='select * from articles where id=?'
    conn.query(sql,id,(err,result)=>{
        if(err) return res.send({status:500,msg:err.message})
        res.render('./article/edit.ejs', {
            user: req.session.user,
            isLogin: req.session.isLogin,
            article: result[0]
        })
    })
}

const handleEditPost=(req,res)=>{
    const user = req.body
    const id=req.body.id
    user.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log(user)
    const sql = 'update articles set ? where id=?'
    conn.query(sql, [user,id], (err, result) => {
        if (err || result.affectedRows != 1) return res.send({
            status: 500,
            msg: '编辑文章失败!请重试!'
        })
        res.send({
            msg: '编辑文章成功！',
            status: 200,
        })
    })
}

module.exports = {
    handleArticleGet,
    handleAddPost,
    handleInfoGet,
    handleEditGet,
    handleEditPost
}