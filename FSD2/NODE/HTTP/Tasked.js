addr ="http://localhost:8006/login"
url = require("url")
q = url.parse(addr)
console.log(q.pathname).split("/")[1]