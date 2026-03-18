// Write a Node.js program using the events module to simulate a sequence of events: 

// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.

// When the "data-received" event occurs, print "Data received successfully".

// Finally, print "Thanks" at the end of execution.

var EventEmmiter=require("events");
var ee=new EventEmmiter();

ee.on("status",(code,type)=>{
    console.log(`Status Code is ${code} will represnt msg ${type}`)
});
ee.emit("status",200,"ok");
// let l1=function listener1(){
//     console.log("I am listner1")
// }
// let l2=function listener2(){
//     console.log("I am listner2")
// }
