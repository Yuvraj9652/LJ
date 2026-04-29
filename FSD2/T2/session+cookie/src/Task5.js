//  Create session.html file page which contains form (username,password,login button). and open it on localhost.

// After clicking submit button, it should jump on “save” page. Store username and password in session.

// After saving session, redirect to “fetchdata” page and read value. Put a LOGOUT link button here. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.

// If this condition is true then display welcome admin and display logout link on this page(fetchdata).

// By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page.

// Else display “Please enter valid username and password” and login link on this page(fetchdata).
var express = require('express');
var app = express();
var session=require('express-session');ww
var cp=require('cookie-parser');
app.use(cp());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
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