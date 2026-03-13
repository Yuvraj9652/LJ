// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.
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