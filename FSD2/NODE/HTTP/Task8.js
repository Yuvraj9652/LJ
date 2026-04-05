// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
//   1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
//           	Output:
//           	Hello!
//           	Welcome to LJU FSD2 T1 Test
//           	#AllTheBest
//   2) Read content from file “exam.txt” and send response to server and display data in “/”  page in same format as above  

//        but in H1 tag and in red color.
//   3) If any other page is requested it shows “Page not found” message in plain text.

const http = require("http");
const fs = require("fs");
const url = require("url");

addr= "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest";
let q = url.parse(addr, true);
process.noDeprecation = true; 
let filename = q.pathname.split("/").pop();
let c1 = q.query.c1;
let c2 = q.query.c2;
let c3 = q.query.c3;
let c4 = q.hash;
let fname= "." + filename; // Prepend current directory to the filename

let content = `${c1}!\n${c3} ${c2}\n${c4}`;

fs.writeFileSync(filename, content);

let server = http.createServer((req, res) => {
    if (req.url === "/") {
        let fileContent = fs.readFileSync(filename, "utf-8");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<html><body>${fileContent.replace(/\n/g, '<br>')}</body></html>`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("Page not found");
        res.end();
    }
});
server.listen(8006, () => {
    console.log("Server is running on http://localhost:8006");
});