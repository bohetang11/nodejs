const express=require('express')
const app=express()

//使用app.set('view engine','模板引擎的名字')
app.set('view engine','ejs')
//配置模板页面所在的路径
app.set('views','./ejs-pages')

app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'zs',age: 18,hobby:['吃饭','睡觉']})
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})