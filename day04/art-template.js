const express=require('express')
const app=express()

//安装art-template和express-art-template
//自定义模板引擎
app.engine('html',require('express-art-template'))
app.set('view engine','html')
app.set('views','./art-pages')

app.get('/',(req,res)=>{
    res.render('index.html',{name:'ls',age:20,hoppy:['看书','上网']})
})
app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})
