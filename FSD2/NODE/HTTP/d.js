http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url+"<br>");
    res.end("URL Fetched");
}).listen(3006);