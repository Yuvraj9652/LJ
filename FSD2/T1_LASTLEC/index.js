const http=require("http");
const fs=require("fs");

//Sir Method
// const server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         data=fs.readFileSync("index.html");
//         res.end(data);
//     }
//     else if(req.url=="/style.css"){
//         res.writeHead(200,{"Content-Type":"text/css"});
//         data2=fs.readFileSync("style.css");
//         res.end(data2);
//     }
//     else{
//         res.writeHead(404,{"Content-Type":"text/html"});
//         res.write("<h1>Page Not Found</h1>");
//         res.end();
//     }
// });

//AI method
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.readFile("index.html",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/html"});
                res.write("<h1>Internal Server Error</h1>");
                res.end();
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url=="/style.css"){
        res.writeHead(200,{"Content-Type":"text/css"});
        fs.readFile("style.css",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/html"});
                res.write("<h1>Internal Server Error</h1>");
                res.end();
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});

server.listen(5000,()=>{
    console.log("Server running at http://localhost:5000");
});