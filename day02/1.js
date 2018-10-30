const fs=require('fs')

fs.readFile(__dirname+'/成绩.txt','utf8',(err,data)=>{
    if(err) return console.log('读取文件失败'+err.message)
    // console.log(data);
    let arr=data.split(' ')
    // console.log(arr)
    let newArr=[]
    arr.forEach((item)=>{
        if(item.length>0){
            let newscore=item.replace('=',':')
            newArr.push(newscore)
        }
    })
    console.log(newArr)
    let str=newArr.join('\n')
    console.log(str)
    fs.writeFile(__dirname+'/1.txt',str,err=>{
        if(err) return console.log('读取文件失败'+err.message)
        console.log('写入成功')
    })

})