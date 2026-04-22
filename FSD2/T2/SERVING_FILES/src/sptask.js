// var express= require("express")
// var app = express()
// var path = require("path")

// sp=path.join(__dirname,'../public')

// app.use(express.static(sp,{index:"sptask.html"}))

// app.use(express.urlencoded({extended:true}))

// app.get("/login",(req,res)=>{
//     var name = req.query.name
//     var email = req.query.email
//     var message = req.query.message
//     var newsletter = req.query.newsletter
//     if(name && email && message){
//         res.write(`
//                 <h1>Welcome Mr.${name}</h1>
//                 <h2>Your email is ${email}</h2>`)
//         if(newsletter){
//             res.write("<h3>Thank you for subscribing to our newsletter</h3>")
//             res.write("<a href='/'>Logout</a>")
//         } else {
//             res.write("<h3>You have not subscribed to our newsletter</h3>")
//             res.write("<a href='/login'>Subscribe</a>")
//         }
//         res.end()
//     } else {
//         res.send("Please fill all the fields")
//     }
// })

// app.listen(5678,()=>{
//     console.log("Server is running on port 5678 http://localhost:5678")
// })


var expr = require("express");
var app = expr();
app.use(expr.static('../public',{index:'sptask.html'}));
app.get("/login",(req,res,next)=>{
    console.log(req.query);
    res.set("content-type","text/html");
    res.write("<center><h1>Welcome " + req.query.name + "</h1>");
    res.write("<center><h2>Your email id is " + req.query.email + "</h2>");
    next();
})
app.get("/login",(req,res,next)=>{
    if(req.query.newsletter && req.query.newsletter == "on"){
        res.write("<h3>Thank you for your subcsription</h3><a href='/'>Logout</a>");
    }else{
        res.write("<h3>You can subcribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
    }
   next();
});
app.get("/subscribe",(req,res)=>{
    res.set("content-type","text/html");
    res.write("<h3>Thank you for your subcsription</h3></center><a href='/'>Logout</a>");
    res.send();
});
app.listen(5001,()=>{
    console.log("Server is running on port 5001 http://localhost:5001")
})