var express=require('express');
app=express();
var multer=require('multer');
app.use(express.static('../public',{index:"upload.html"}));
var storage=multer.diskStorage({
    destination:"hello",
    filename:function(req,file,cb){
        cb(null,file.originalname);
        // cb(null,file.fieldname);
    }
});
var upload=multer({storage});
app.post("/upload",upload.single("file"),(req,res)=>{
    const file=req.file;
    if(!file){
        return res.status(400).json({message:"No file uploaded"});
    }else{
        res.json({message:"File uploaded successfully",file:file.originalname});
    }
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000 on http://localhost:3000");
});