const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.sendFile('./ejs-pages/home.html',{root:__dirname})
})
router.get('/about',(req,res)=>{
    res.sendFile('./ejs-pages/about.html',{root:__dirname})
})
router.get('/movie',(req,res)=>{
    res.sendFile('./ejs-pages/movie.html',{root:__dirname})
})
//把路由对象导出,供外界使用
module.exports=router