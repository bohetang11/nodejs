const express=require('express')
const app=express()
const querystring = require('querystring')

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())

app.use((req,res,next)=>{
    let datastr=''
    req.on('data',chunk=>{
        datastr+=chunk
    })
    
    req.on('end',()=>{
        console.log(datastr)
        let obj=querystring.parse(datastr)
        console.log(obj)
        req.body=obj
        next()
    }) 
})

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:__dirname})
})
app.post('/postdata',(req,res)=>{

    console.log(req.body)
    res.send(req.body)
})

app.listen(3000,()=>{
    console.log('http://127.0.0.1:3000')
})