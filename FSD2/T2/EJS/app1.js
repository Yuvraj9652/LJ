var expr=require('express');
app=expr();
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render('f1',{name:"Yuvraj"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
});