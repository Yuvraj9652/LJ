const http = require('http');

let server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello World</h1>');
    res.end();
});

server.listen(6008, () => {
    console.log('Server is running on http://localhost:6008');
});