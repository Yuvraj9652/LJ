var express=require("express")
var app=express()
var cp=require("cookie-parser")
app.use(cp())
app.use(express.urlencoded({extended:true}))
app.use(express.static("../public",{index:"feedback.html"}))

app.post("/submit-feedback",(req,res)=>{
    const {name,email,message,rating}=req.body
    const feedback=`Name: ${name}, Email: ${email}, Message: ${message}, Rating: ${rating}`
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send("Feedback submitted successfully! <a href='/data'>View Feedback</a>")
})
app.get("/data",(req,res)=>{
    data=req.cookies.feedback
    if(data){
        res.send(`Your Feedback: ${data} <a href="/logout">Logout</a>`)
    }else{
        res.send("No feedback found. Please submit your feedback first.")
    }
})
app.get("/logout",(req,res)=>{
    res.clearCookie("feedback")
    res.redirect("/")
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})