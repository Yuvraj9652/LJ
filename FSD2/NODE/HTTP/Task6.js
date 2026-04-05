// Write node.js script to print “Welcome to Home Page” with two links containing two pages named as 
// “About Us” and “Contact Us” on home page of server.
// If user request for About Us page it should display “Welcome to LJ University” in bold font-style with blue color and 
// if user request for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red color 
// if any other request is requested it shows “Page not found” message in plaintext.

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
        <h1>Welcome to Home Page</h1>
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
        <h1 style="color:blue; font-weight:bold;">Welcome to LJ University</h1>
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
        <p style="color:red; font-style:italic;">Email: abc@ljinstitutes.edu.in</p>
        </body>
        </html>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`<html>
        <body>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        </body>
        </html>`);
    }
    res.end();
});

server.listen(5006, () => {
    console.log("Server is running on http://localhost:5006");
});