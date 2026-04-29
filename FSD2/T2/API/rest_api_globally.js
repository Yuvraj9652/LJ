var expr=require('express');
var router=expr.Router();
const mvi=[{id:1,name:"sachin",age:50},{id:2,name:"dhoni",age:40}];
router.get("/m",(req,res)=>{
    res.json(mvi);
})
router.get("/m/:id",(req,res)=>{
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
module.exports=router;
//THis will be called in a.js and we will use it as middleware with the path /api so that we can access the routes defined here with the prefix /api