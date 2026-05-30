const expr = require("express");
const app = expr();
data = {name:'xyz',age:24}
app.get('/',(req,res)=>{
    res.write(JSON.stringify(data.age))
    res.send()
});
app.listen(5006,'0.0.0.0',()=>{
    console.log('Server Connected, http://localhost:5006');
})