

const handleArticleGet=(req,res)=>{
    if(!req.session.isLogin) return res.redirect('/')
    res.render('./article/add.ejs',{
        user: req.session.user,
        isLogin: req.session.isLogin
    })
}

const handleAddPost=(req,res)=>{
    
}
// const handleInfoGet=(req.res)=>{
   
// }
module.exports={
    handleArticleGet,
    handleAddPost
    // handleInfoGet
}