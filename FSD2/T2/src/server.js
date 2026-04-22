//Basic server using express
/*
var expr=require('express');
var app=expr();

app.use(expr.static('../public'))
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})

*/

//Server using express with middleware
/*
var express = require("express")
var app = express()
app.use(express.static('../public'))
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})
*/


//Server using express with middleware and index file

/*
var express = require("express")
var app = express()
app.use(express.static('../public',{index:"Jambo.html"}))
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})
*/


//Server using express with middleware and index file using sendFile

//It will not give css and js files because we are not using static middleware

/*
var express = require("express")
var path = require("path")
var app = express()

sp=path.join(__dirname,'../public')

app.get("/",(req,res)=>
{
    res.sendFile(sp+"/index.html")
})

app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
}) 
    */

//Server using express with middleware and index file using sendFile with static middleware
/*
var express = require("express")
var app = express()
var path = require("path")
sp=path.join(__dirname,'../public')
app.use(express.static(sp))
app.get("/",(req,res)=>
{
    res.sendFile(sp+"/index.html")
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})
*/

var express = require("express")
var app = express()
