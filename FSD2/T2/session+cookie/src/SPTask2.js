// Write a Node.js script using Express framework to meet the following requirements:

// Create a folder named public and add a file index.html which contains a login form (username, password, login button). This page should open on localhost.

// After clicking the submit button, the request should be sent to /login using POST method. Store the username in session and redirect the user to order.html.

// Create an order.html page which contains a form (product name, quantity, submit button).

// After submitting the order form, the request should be sent to /order using POST method. Store product and quantity in session and redirect to /summary page.

// On /summary page (using GET method):

// Read session data (username, product, quantity)

// Display all values on the page

// Provide a logout link:

// On clicking logout, destroy the session

// Redirect user to login page

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
app.use(express.static('../public',{index:'login.html'}));
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    req.session.username=username;
    req.session.password=password;
    res.redirect('/order.html');
});
app.post('/order',(req,res)=>{
    const {product,quantity}=req.body;
    req.session.product=product;
    req.session.quantity=quantity;
    res.redirect('/summary');
});
app.get('/summary',(req,res)=>{
    if(req.session.username){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`Username: ${req.session.username}<br>`);
        res.write(`Product: ${req.session.product}<br>`);
        res.write(`Quantity: ${req.session.quantity}<br>`);
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