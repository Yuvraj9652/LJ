//If user refreshes after 10 seconds, session should be destroyed and user should be redirected to login page.
var express=require('express');
var app=express();
var session=require('express-session');
var cp=require('cookie-parser');
app.use(cp());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10000 } // Session expires after 10 seconds
}));
app.use(express.static('../public',{index:'login.html'}));
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    req.session.username=username;
    req.session.password=password;
    res.redirect('/fetchdata');
});
app.get('/fetchdata',(req,res)=>{
    if(req.session.username === 'admin' && req.session.password === 'admin@123'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`Welcome ${req.session.username} to the dashboard!`);
        res.write('<br><a href="/logout">Logout</a>');
        res.send();
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('Please enter valid username and password');
        res.write('<br><a href="/">Login</a>');
        res.send();
    }
});
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Session destroyed');
    res.write('<br><a href="/">Login</a>');
    res.send();
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000 http://localhost:3000');
});
