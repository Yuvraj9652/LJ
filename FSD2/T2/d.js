var express = require("express")
var app = express()

const addName = (req,res,next)=>{
    req.name = "Yuvraj"
    next()
}

const addAge = (req,res,next)=>{
    req.age = 24
    next()
}
app.use("/data/1", addName, addAge)
app.get("/data/1", (req,res)=>{
    res.send("Welcome " + req.name + ", you are " + req.age + " years old.")
})

app.listen(5691, ()=>{
    console.log("Server is running on port 5691 http://localhost:5691")
})