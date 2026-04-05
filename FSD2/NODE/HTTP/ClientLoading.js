http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html>
        <body>
        <p id="demo"></p>
        <script>
        setTimeout(() => {
            document.getElementById("demo").innerHTML = "Hello World!";
        }, 5000);
        </script>
        </body>
        </html>`);
    res.end();
}).listen(5008, () => {
    console.log("Server is running on http://localhost:5008");
});