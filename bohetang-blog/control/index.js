const handleIndexGet=(req, res) => {
    res.render('index.ejs', {
        user: req.session.user,
        isLogin: req.session.isLogin
    })
}

module.exports={
    handleIndexGet
}