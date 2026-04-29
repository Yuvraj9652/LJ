expr=require('express');
app=expr();
var nodemailer=require('nodemailer');
app.use(expr.static('../public',{index:"task3.html"}));
app.use(expr.urlencoded({extended:true}));

app.post("/response",(req,res)=>{
    const {name,email,message}=req.body;
    var transporter=nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:"eduquiz.com@gmail.com",
            pass:"wumn mkga kkev hibe"
        }
    });
    var mailOptions={
        from:"eduquiz.com@gmail.com",
        to:email,
        subject:"Response from "+name,
        text:"Thank you for your message"
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Email sent: "+info.response);
        }
    });
    res.send("Your message has been sent successfully!");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
});