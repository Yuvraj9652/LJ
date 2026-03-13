//  Write node js script and json to perform below tasks. 

const { readFileSync } = require("fs");

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.

// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.

fs=require("fs");
let inputData={data:{a:15,b:20,c:[40,30]}}
fs.writeFileSync("input.txt",JSON.stringify(inputData));
let data=readFileSync("input.txt","utf-8");
let dict=JSON.parse(data);

let a=dict.data.a;
let b=dict.data.b;
let c=dict.data.c;

let add=a+b;
let sub=c[1]-b;
let mul=c[1]*c[0];

let ans="\nAddition: "+add+" Subtraction: "+sub+" Multiplication: "+mul;

fs.writeFileSync("output.txt",JSON.stringify(dict));
fs.appendFileSync("output.txt",ans);
let finalData=fs.readFileSync("output.txt","utf-8");
console.log(finalData);