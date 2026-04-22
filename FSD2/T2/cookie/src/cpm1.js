var cp=require("cookie-parser")
var express=require("express")
app = express()
app.use(cp())
app.use(express.static("../public",{index:"form.html"}))
app.use(express.urlencoded({extended:true}))
app.post("/next",(req,res)=>{
    res.cookie("fname",req.body.fname)
    res.cookie("lname",req.body.lname)
    res.cookie("email",req.body.email,{maxAge:10000})
    res.redirect("/data")
})
app.get("/data",(req,res)=>{
    res.send(`Welcome ${req.cookies.fname} ${req.cookies.lname} your email is ${req.cookies.email}`)
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})