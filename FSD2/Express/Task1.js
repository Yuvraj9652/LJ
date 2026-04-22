/*
Task-1 Write an express js script to define one JSON array of 3 objects having properties name and age.
Short these objects according to age. If user request sorted names in url then all names along with age should be printed according to descending order of age.
Also, display these sorted values on “Sort page” and display JSON object on “Home page”.
*/
const expr = require('express')
const app = expr()
const data = [
    {name:'Jatan',age:19},
    {name:'Rahul',age:21},
    {name:'Suresh',age:17}
]
console.log(data);
app.get('/',(req,res)=>{
    const data1 = data
    res.set('Content-Type','text/plain')
    res.send(data)
})
app.get('/sorted',(req,res)=>{
    const data2 = data.sort((a,b)=>(b.age-a.age))
    res.set('Content-Type','text/plain')
    res.send(data2)
})
app.listen(5006,'0.0.0.0',()=>{
    console.log("Server Connected @ http://10.76.50.62:5006/");
})

/*
Task -2  Write Express JS script to request server to display json object (Array of Objects) in table form on browser. 
*/
const app1 = expr()
let data3 = {abc:1,def:2,mno:3,pqr:4,xyz:5}
kes = Object.keys(data3)
app1.get('/',(req,res)=>{
    res.set('Content-type','text/html')
    let content = `
        <html>
            <head>
            </head>
            <body>
                <table border="5" cellpadding="10" cellspacing="10">
                    <thead>
                        <th>Name</th>
                        <th>Id</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${kes[0]}</td>
                            <td>${data3.abc}</td>
                        </tr>
                        <tr>
                            <td>${kes[1]}</td>
                            <td>${data3.def}</td>
                        </tr>
                        <tr>
                            <td>${kes[2]}</td>
                            <td>${data3.mno}</td>
                        </tr>
                        <tr>
                            <td>${kes[3]}</td>
                            <td>${data3.pqr}</td>
                        </tr>
                        <tr>
                            <td>${kes[4]}</td>
                            <td>${data3.xyz}</td>
                        </tr>
                    </tbody>
                </table>
            </body>
        </html>     
    `;
    res.send(content)
})
app1.listen(2003,()=>{
    console.log('Server running at localhost:2003');
})