const conn=require('../db/db.js')

const handleIndexGet=(req, res) => {
    const sql=`select u.nickname, a.title, a.ctime, a.id from articles as a LEFT JOIN users as u on u.id= a.author_id`
    conn.query(sql,(err,result)=>{
        console.log(result)
        if(err) return res.send({status:500,msg:'获取失败!'})
        res.render('index.ejs', {
            user: req.session.user,
            isLogin: req.session.isLogin,
            article:result
        })
    })
}

module.exports={
    handleIndexGet
}