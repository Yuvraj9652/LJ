var pm=require("path");
var a=pm.basename("D:\\Yuvraj\\LJ\\LJ\\FSD2\\NODE\\NodeJsModule\\Path\\hello.txt");
console.log(a);
var b=pm.dirname("D:\\Yuvraj\\LJ\\LJ\\FSD2\\NODE\\NodeJsModule\\Path\\hello.txt");
console.log(b);
var c=pm.extname("D:\\Yuvraj\\LJ\\LJ\\FSD2\\NODE\\NodeJsModule\\Path\\hello.txt");
console.log(c);
var d=pm.parse("D:\\Yuvraj\\LJ\\LJ\\FSD2\\NODE\\NodeJsModule\\Path\\hello.txt");
console.log(d);
var e=pm.format(d);
console.log(e);
if(d.ext==".txt"){
    console.log("This is a text file");
}else{
    console.log("This is not a text file");
}