http = require("http");

let server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
        <body>
        <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </nav>
        <h1>Welcome to My Website</h1>
        <p>This is a simple website created using Node.js and HTML.</p>
        </body>
        </html>`);
    } else if (req.url === "/about") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html>
        <body>
        <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </nav>
        <h1>About Us</h1>
        <p>We are a team of passionate developers creating web applications.</p>
        </body>
        </html>`);
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write(`<html>
        <body>
        <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        </nav>
        <h1>Contact Us</h1>
        </body>
        </html>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<html>
        <body>
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        </body>
        </html>`);
    }
    res.end();
});

server.listen(5006, () => {
    console.log("Server is running on http://localhost:5006");
});