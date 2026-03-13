// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
const shape=[
    {name:"circle",diameter:8},{name:"square",side:10}
]
// let perimeterOfSquare=shape[1].side*4;
// let perimeterOfCircle=3.14*(shape[0].diameter);
// console.log(perimeterOfCircle,perimeterOfSquare)
// let ans="Perimeter of circle: "+perimeterOfCircle+"Perimeter of Square: "+perimeterOfSquare;

fs=require("fs");
fs.writeFileSync("shape.txt",JSON.stringify(shape));

let data=fs.readFileSync("shape.txt","utf-8");
let arr=JSON.parse(data);
let perimeterOfSquare=arr[1].side*4;
let perimeterOfCircle=3.14*(arr[0].diameter);
let ans="\nPerimeter of circle: "+perimeterOfCircle+" Perimeter of Square: "+perimeterOfSquare;

fs.appendFileSync("shape.txt",ans);

let finalData=fs.readFileSync("shape.txt","utf-8");
console.log(finalData);