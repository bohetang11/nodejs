const express=require('express')
const router=express.Router()

const cont=require('../control/article.js')
//请求添加文章页面
router.get('/article/add',cont.handleArticleGet)
//添加数据
router.post('/article/add',cont.handleAddPost)
//详细页面
router.get('/article/info/:id',cont.handleInfoGet)
//编辑页面
router.get('/article/edit/:id',cont.handleEditGet)

router.post('/article/edit',cont.handleEditPost)

module.exports=router