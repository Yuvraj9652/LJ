fs=require("fs");
fs.writeFile("Lec1.txt","JSON",(err)=>{
    if(err) throw err;
    console.log("File Created");
});
fs.appendFile("Lec1.txt"," We are learning NodeJS",(err)=>{
    if(err) throw err;
    console.log("Data Appended");
});
fs.readFile("Lec1.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
console.log("Process Ended");