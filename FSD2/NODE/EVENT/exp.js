eventemitter=require('events');
var ee=new eventemitter();
fs=require('fs')
ee.on("write",()=>{
    fs.mkdir("Test")
    fs.writeFileSync("/Test/abc.txt","file write successfully!")
    ee.emit("append")
})
ee.on('append',()=>{
    fs.appendFileSync("/Test/abc.txt","Data Appended Successfully")
    ee.emit("read")
})
ee.on('read',()=>{
    data=fs.readFileSync("/Test/abc.txt")
    console.log(JSON.parse(data))
    ee.emit("copy")
})
ee.on("copy",()=>{
    fs.copyFileSync("/Test/abc.txt","Test/pqr.txt")
    ee.emit("delete")
})
ee.on('delete',()=>{
    fs.unlinkSync("/Test/abc.txt")
    console.log("All operations performed successfully")
})
ee.emit("write");