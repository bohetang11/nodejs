const express=require('express')
const app=express()

// 注册 body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//导入mysql模块
const mysql=require('mysql')
//创建数据库连接
const conn=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
})

// 在 API 服务器端，启用 CORS 跨域资源共享
const cors = require('cors')
app.use(cors())

//测试
app.get('/',(req,res)=>{
    res.send('ok')
})

//获取所有英雄列表
app.get('/getallhero',(req,res)=>{
    const sql='select * from heros order by id'
    conn.query(sql,(err,result)=>{
        if(err) return res.status(500).send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})

//添加英雄
app.post('/addhero',(req,res)=>{
    const hero=req.body

    const dt=new Date()
    const y=dt.getFullYear()
    const m=(dt.getMonth()+1).toString().padStart(2,'0')
    const d=dt.getDate().toString().padStart(2,'0')
    const h=dt.getHours().toString().padStart(2,'0')
    const mm=dt.getMinutes().toString().padStart(2,'0')
    const s=dt.getSeconds().toString().padStart(2,'0')
    hero.ctime=time=`${y}-${m}-${d} ${h}:${mm}:${s}`

    console.log(hero)

    const sql='insert into heros set ?'
    conn.query(sql,hero,(err,result)=>{
        if(err) return res.status(500).send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})

//根据id获取英雄信息
app.get('/gethero',(req,res)=>{
    const id=req.query.id
    getId(id,res)
})

app.get('/gethero/:id',(req,res)=>{
    const id=req.params.id
    getId(id,res)
})

//封装获取id函数
function getId(id,res){
    const sql='select * from heros where id=?'
    conn.query(sql,id,(err,result)=>{
        if(err) return res.status(500).send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
}

//根据id更新英雄信息
app.post('/updatehero/:id',(req,res)=>{
    const id=req.params.id
    const info=req.body
    // console.log(info)
    const sql='update heros set ? where id=?'
    conn.query(sql,[info,id],(err,result)=>{
        if(err) return res.status(500).send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})

//根据id删除英雄信息(更改isdel的值,1表示已删除,0表示未删除)
app.get('/deletehero/:id',(req,res)=>{
    const id=req.params.id
    const sql='update heros set isdel=1 where id=?'
    conn.query(sql,id,(err,result)=>{
        if(err) return res.status(500).send({status:500,msg:err.message,data:null})
        res.send({status:200,msg:'ok',data:result})
    })
})

app.get
app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000')
})