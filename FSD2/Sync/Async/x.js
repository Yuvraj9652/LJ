fs=require("fs");
fs.writeFileSync("Lec1.txt","JSON");
fs.appendFileSync("Lec1.txt"," NodeJS");
let data=fs.readFileSync("Lec1.txt","utf8");
console.log(data);
console.log("Process Ended");

fs.copyFileSync("Lec1.txt","Lec2.txt");
fs.renameSync("Lec1.txt","data.txt");
fs.unlinkSync("Lec2.txt");
