const express = require('express')
const app = express()
const session=require('express-session')

app.use(session({
    secret: 'bohetang',
    resave: false,
    saveUninitialized: false,
  }))

//模板初始化
app.set('view engine', 'ejs')
app.set('views', './views')

//托管node_modules
app.use('/node_modules', express.static('./node_modules'))


// 导入首页的路由模块
const indexRouter = require('./router/index.js')
app.use(indexRouter)
//导入用户功能的路由模块
const userRouter=require('./router/user.js')
app.use(userRouter)

//导入文章的路由模块
const articleRouter=require('./router/article.js')
app.use(articleRouter)


app.listen(1000, () => {
    console.log('http://127.0.0.1:1000')
})