const expr = require("express");
const app = expr();
app.get('/',(req,res)=>{
    res.set('Content-Type','text/html')
    res.send('<h1>Hello World</h1>')
});
app.listen(5006,()=>{
    console.log('Server Connected');
})