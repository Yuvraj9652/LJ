var expr=require('express');
app=expr();
const mvi=[{id:1,name:"sachin",age:50},{id:2,name:"dhoni",age:40}];
app.get("/m",(req,res)=>{
    res.json(mvi);
})
app.get("/m/:id",(req,res)=>{
    // const id=req.params.id;
    // const mv=mvi.find(m=>m.id==id);
    // if(mv){
    //     res.json(mv);
    // }else{
    //     res.status(404).json({message:"Movie not found"});
    // }
    cm=mvi.filter((a)=>a.id==req.params.id);
    if(cm.length>0){
        res.json(cm[0]);
    }else{
        res.status(404).json({message:"Movie not found"});
    }
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
})