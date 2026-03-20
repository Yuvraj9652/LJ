u=require("url");
fs=require("fs");

let addr='https://localhost:8080/default.html?year=2026&month=march#warUpdate';
var q=u.parse(addr,true);
fs.writeFileSync('url.txt',JSON.stringify(q.query));