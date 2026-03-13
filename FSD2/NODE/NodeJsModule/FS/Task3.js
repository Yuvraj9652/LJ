// Write node JS script to write an array of objects with properties name and age in a file named student.txt. Then read the file and display the object on console.  
fs=require("fs");
let student=[
    {
        name:"Yuvraj",
        age:21
    },
    {
        name:"Rahul",
        age:22
    },
]
fs.writeFileSync("student.txt",JSON.stringify(student));
let data=fs.readFileSync("student.txt","utf-8");
console.log(data);