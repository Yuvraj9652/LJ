http=require('http');
fs=require('fs');
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("<h1>About Page</h1>");
        res.end();
    }
    else if(req.url=="/OIP.png"){
        data = fs.readFileSync("OIP.png");
        res.writeHead(200,{"Content-Type":"image/png"})
        res.end(data)
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h1>404 - Page Not Found</h1>");
        res.end();
    }
}).listen(5001,()=>{
    console.log("Server is running on http://localhost:5001");
})