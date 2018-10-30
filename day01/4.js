let fs=require('fs')

fs.writeFile(__dirname+'/2.txt','333',err=>{
    if (err) return console.log('写入文件失败！' + err.message)
    console.log('文件写入成功！')
})