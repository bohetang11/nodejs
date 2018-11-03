const express=require('express')
const app=express()

app.use(express.static('./views'))
app.use('/semantic',express.static('./semantic'))
app.use('/node_modules',express.static('./node_modules'))

app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000')
})