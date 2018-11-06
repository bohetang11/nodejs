const express = require('express')
const router=express.Router()

//导入 用户相关的 处理函数模块
const cont=require('../control/index.js')

router.get('/', cont.handleIndexGet)

module.exports=router