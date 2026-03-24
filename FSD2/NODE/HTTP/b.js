const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });//writeHead is used to set the status code and headers for the response. In this case, it sets the status code to 200 (OK) and the Content-Type header to 'text/html', indicating that the response will be in HTML format.
    //Without writeHead, see the output in the browser by commenting the above line and uncommenting the below line
    res.write("Hi");
    res.write('<h1>Hello World</h1>');
    res.end("How are you doing?");
});

server.listen(6008, () => {
    console.log('Server is running on http://localhost:6008');
});
