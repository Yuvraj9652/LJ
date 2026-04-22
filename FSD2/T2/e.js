// /class=log print
// verify student id
// if valid hello
// if not denied access

var express = require("express")
var app = express()

cb=(req,res,next)=>
{
    console.log("Student entered the class")
    next()
}
cv=(req,res,next)=>{
    const a=true
    if(a)
    {
        console.log("Student is valid")
        next()
    }
    else
    {
        res.send("Access Denied")
    }
}
app.use("/class",cb,cv)
app.get("/class",(req,res)=>
{
    res.send("Hello Student"+req.Student)
})
app.listen(5679,()=>{
    console.log("Server is running on port 5678 http://localhost:5679")
})