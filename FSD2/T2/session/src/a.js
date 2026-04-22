var expr=require('express');
var app=expr();
var ss=require('express-session');
app.use(ss({
    secret: 'Hello123',
    resave: true,
    saveUninitialized: true
}));
app.get('/',(req,res)=>{
    if(req.session.views){
        req.session.views++;
        res.send(`Number of views: ${req.session.views}`)
    }else{
        req.session.views=1;
        res.send("Welcome to the session demo. Refresh the page!")
    }
})
app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})