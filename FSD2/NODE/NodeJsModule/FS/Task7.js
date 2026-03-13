// Write a Node.Js program for following action 

// Write a file having five numbers in array form separated by white space in .txt file.

// Append sorted array of these 5 numbers in same file along with message: “Sorted array:” in new line.

// Find maximum number from that and append with message “maximum number=” in same file. (your code should compatible for any random numbers including sign)

fs=require("fs");
fs.writeFileSync("Task7.txt","0 1 -9 20 33 -44 50");
let data=fs.readFileSync("Task7.txt","utf8");
let arr=data.split(" ").sort((a, b) => a - b);
fs.appendFileSync("Task7.txt","\nSorted array: "+arr);
let max=Math.max(...arr);
fs.appendFileSync("Task7.txt","\nMaximum number: "+max);
let finalData=fs.readFileSync("Task7.txt","utf-8");
console.log(finalData);