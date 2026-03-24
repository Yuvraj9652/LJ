http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let data = { name:"Rohit", age:35, team:"India" };
    res.end(JSON.stringify(data));
}).listen(5006);