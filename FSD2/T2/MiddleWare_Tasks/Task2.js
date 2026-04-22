// Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit button using get method.

// 1) After clicking submit button the content of submitted details should be represented on “/login” page along with one “show vowel” link.

// 2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page. (Use next() to route page)

var express = require("express")
var app = express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>
{
    res.send('<form action="/login" method="post">username:<input type="text" name="uname">password:<input type="text" name="pass">message:<textarea name="msg"></textarea><input type="submit" value="Submit"></form>')
})
app.post("/login",(req,res)=>
{
    name=req.body.uname
    pass = req.body.pass
    msg = req.body.msg
    res.send("Welcome "+name+"<br> Your password is "+pass+"<br> Your message is "+msg+"<br><a href='/message'>Show Vowel</a>")
})
app.get("/message",(req,res)=>
{
    msg = req.body.msg
    count = 0
    for(i=0;i<msg.length;i++)
    {
        if(msg[i]=="a" || msg[i]=="e" || msg[i]=="i" || msg[i]=="o" || msg[i]=="u")
        {
            count++
        }
    }
    res.send("Number of vowels in your message is "+count)
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})
