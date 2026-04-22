var express= require("express")
var app = express()
var path = require("path")

sp=path.join(__dirname,'../public')

app.use(express.static(sp,{index:"ljform.html"}))
app.use(express.urlencoded({extended:true}))

app.post("/login",(req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(username === "admin" && password === ""){
        res.send("Welcome admin")
    } else {
        res.send("Invalid username or password")
    }
})

app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})