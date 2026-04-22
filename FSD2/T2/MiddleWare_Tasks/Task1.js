// Write express JS script to load in html file* having username, password and submit button. On clicking of submit button, it should jump on check page using post method. If username is “admin” then jump on next middleware to print “welcome admin”. For any other username it should stay on same middleware to print warning message in red color.
var express = require("express")
var app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>
{
    res.send('<form action="/check" method="post">username:<input type="text" name="uname">password:<input type="text" name="pass"><input type="submit" value="Submit"></form>')
})
app.post("/check",(req,res,next)=>
{
    name=req.body.uname
    pass = req.body.pass
    if(name=="admin")
    {
        next()
    }
    else
    {
        res.send("<h1 style='color:red'>Warning: Invalid username</h1>")
    }
})
app.get("/check",(req,res)=>
{
    res.send("Welcome admin")
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})