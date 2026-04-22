var cp=require("cookie-parser")
var express=require("express")
var app=express()
app.use(cp())
app.get("/data",(req,res)=>{
    res.cookie("name","express")
    res.cookie("age",28)
    res.cookie("email","exp@gmail.com",{maxAge:2000})
    res.send(req.cookies)
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})