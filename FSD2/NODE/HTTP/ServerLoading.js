http = require('http');
http.createServer((req, res) => {
    setTimeout(() => {
        res.write("Hello World!");
        res.end();
    },5000);
}).listen(5008, () => {
    console.log("Server is running on http://localhost:5008");
})