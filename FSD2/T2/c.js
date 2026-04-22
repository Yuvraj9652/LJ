const express = require("express")
const app = express()


cv = (req,res,next) =>
{
    console.log("cv is called")
    next()
}
cb = (req,res,next) =>
{
    console.log("cb is called")
    res.write("Hello")
    next()
}
app.use("/ee",cv,cb)
app.get("/ee",(req,res)=>
{
    res.write("<h1>Welcome to Express</h1>")
    res.send()
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})