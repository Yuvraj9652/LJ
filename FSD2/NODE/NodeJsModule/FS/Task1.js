// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.
fs=require("fs");
fs.writeFileSync("Task1.txt","0 1 -9 20 33 -44 50");
let data=fs.readFileSync("Task1.txt","utf8");
let arr=data.split(" ").sort((a, b) => a - b);
console.log(arr);