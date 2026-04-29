var expr=require('express');
var app=expr();
var router=require("./Task1");
app.use("/",router);
app.listen(7899,()=>{
    console.log("Server is running on port 7899 on http://localhost:7899");
});