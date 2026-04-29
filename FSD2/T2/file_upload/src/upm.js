var express=require('express');
app=express();
var multer=require('multer');
app.use(express.static('../public',{index:"upload_multiple.html"}));
var storage=multer.diskStorage({
    destination:"Jambo",
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
var upload=multer({storage});
app.post("/upload",upload.array("file",3),(req,res)=>{
    const files=req.files;
    // if(!files || files.length === 0){
    //     return res.status(400).json({message:"No files uploaded"});
    // }else{
    //     res.json({message:"Files uploaded successfully",files:files.map(f => f.originalname)});
    // }
    res.type("text/html");
    if(files){
        for(i of files){
            res.write(`Your file ${i.originalname} has been uploaded successfully\n`);
        }
        res.send();
    }
    else{
      res.status(400).send("No files uploaded");
    }
});
app.listen(3005,()=>{
    console.log("Server is running on port 3005 on http://localhost:3005");
});