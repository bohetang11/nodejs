const express = require('express')
const router=express.Router()

// 注册解析表单数据的中间件
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({
    extended: false
}))

//导入 用户相关的 处理函数模块
const cont=require('../control/user.js')

//展示注册和登录页面
router.get('/register', cont.handleRegisterGet)

router.get('/login', cont.handleLoginGet)

//注册
router.post('/register', cont.handleRegisterPost)

//登录
router.post('/login',cont.handleLoginPost)

//注销
router.get('/logout',cont.handleLogoutGet)

module.exports=router