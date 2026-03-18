// var EventEmmiter=require("events");
// var weddingManager=new EventEmmiter();

// weddingManager.on("ceremonyStart", () => {
//     console.log("Decorator prepares the stage");
// });

// weddingManager.on("ceremonyStart", () => {
//     console.log("Photographer takes photos");
// });

// weddingManager.on("ceremonyStart", () => {
//     console.log("Caterers serve food");
// });

// weddingManager.on("ceremonyStarts", () => {
//     console.log("DJ plays music");
// });

// weddingManager.emit("ceremonyStart");


var EventEmmiter=require("events");
var ee=new EventEmmiter();

var Photographer= function(){
    console.log("I am Photographer");
}
var Decorator= function(){
    console.log("I am Decorator");
}
var Caterers= function(){
    console.log("I am Caterers");
}
var stage= function(){
    console.log("Stage ready");
}
var x="";
ee.on("mrgfunction",Decorator);
ee.on("mrgfunction",Caterers);
ee.on("mrgfunction",Photographer);
ee.on("mrgfunction",stage);

console.log("Starts");
ee.emit("mrgfunction")
console.log('Thank you');