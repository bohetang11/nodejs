let fs=require('fs')

fs.appendFile(__dirname+'/2.txt','444',err=>{
    if (err) return console.log('写入文件失败！' + err.message)
    console.log('文件写入成功！')
})

var a = 10; 
var str = `${a}岁了`;
console.log(str)

