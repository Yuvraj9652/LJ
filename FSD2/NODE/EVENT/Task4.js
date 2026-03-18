// Write node js script to handle events as asked below.

// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 

// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 

var EventEmmiter=require("events");
var ee=new EventEmmiter();
ee.on("circle",(err,radius)=>{
    if(err){
        console.log("Radius must be positive");
    }
    else{
        console.log("Perimeter of circle is "+(2*3.14*radius));
    }
});
ee.on("square",(err,side)=>{
    if(err){
        console.log("Side must be positive");
    }
    else{
        console.log("Perimeter of square is "+(4*side));
    }
});

function circle(radius){
    if(radius<0){
        ee.emit("circle",true);
    }
    else{
        ee.emit("circle",false,radius);
    }
}

function square(side){
    if(side<0){
        ee.emit("square",true);
    }
    else{
        ee.emit("square",false,side);
    }   
}

circle(5);
square(4);