var expr=require('express');
var app=expr();
var router=require("./Task2.js");
app.use("/",router);
app.listen(30001,()=>{
    console.log("Server is running on port 30001 on http://localhost:30001");
});