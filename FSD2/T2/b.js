var express = require("express")
var app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>
{
    res.send('<form action="/data" method="post">username:<input type="text" name="uname">age:<input type="text" name="age"><input type="submit" value="Submit"></form>')
})
app.post("/data",(req,res)=>
{
    name=req.body.uname
    age = req.body.age
    res.send("Welcome"+name+"age"+age)
})
app.listen(5555,()=>{
    console.log("Server is running on port 5555 http://localhost:5555")
})