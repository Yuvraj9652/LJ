var express = require('express');
var app = express();
var session=require('express-session');
var cp=require('cookie-parser');
app.use(cp());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static('../public',{index:'login_get.html'}));
app.get('/login',(req,res)=>{
    const {username,password}=req.query;
    req.session.username=username;
    req.session.password=password;
    res.redirect('/dashboard');
});
app.get('/dashboard',(req,res)=>{
    if(req.session.username){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`Welcome ${req.session.username} to the dashboard!`);
        res.write('<br><a href="/logout">Logout</a>');
        res.send();
    } else {
        res.send('Please login first');
    }
});
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.redirect('/');
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000 http://localhost:3000');
});