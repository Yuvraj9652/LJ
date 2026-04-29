expr=require('express');
app=expr();
var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:"eduquiz.com@gmail.com",
        pass:"wumn mkga kkev hibe"
    }
});
app.use(expr.static('../public',{index:"mail.html"}));
var mailOptions={
    from:"eduquiz.com@gmail.com",
    to:"yyuvrajlabana@gmail.com",
    subject:"Nodemailer Test",
    text:"Hello, this is a test email sent using Nodemailer!",
    // html:"<h1>Hello</h1><p>This is a test email sent using Nodemailer!</p>"
    attachments:[
        {
            filename:"Image.jpg",
            path:"../public/Image.jpg"
        }
    ]
};
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Email sent: "+info.response);
    }
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
});