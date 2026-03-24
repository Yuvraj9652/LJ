const http = require("http")
let server1 = http.createServer((req,res)=>
{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("<br> Hello <br><img src=OIP.webp>")
    res.end()
   
})
server1.listen(5008,()=>
{
    console.log("Server connected ")
})

//Here Image will not be shown to see corrected code see e.js file in the same folder.