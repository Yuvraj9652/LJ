expr=require('express');
app=expr();
i=require('./rest_api_globally.js');
app.use("/api",i);
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
})
//To run this run on http://localhost:3000/api/m and http://localhost:3000/api/m/1 or http://localhost:3000/api/m/2