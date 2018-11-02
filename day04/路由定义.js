const express=require('express')
const app=express()

// 1.导入路由对象
const router=require('./router.js')
//2.调用app.use  安装路由模块
app.use(router)

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})