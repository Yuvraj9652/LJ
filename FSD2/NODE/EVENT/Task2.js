// Write a NodeJs script to create two listeners for a common event. Call their respective callbacks. Print no. of events associated with an emitter. Remove one of the listener and  print no of remaining listeners. 

var EventEmmiter=require("events");
var ee=new EventEmmiter();

let l1=function listener1(){
    console.log("I am listner1")
}
let l2=function listener2(){
    console.log("I am listner2")
}
ee.addListener("conn",l1);
ee.on("conn",l2);
// ee.emit("conn");

var d=ee.listenerCount("conn");
console.log(d);
ee.emit("conn");

ee.removeListener("conn",l1);
var d=ee.listenerCount("conn");
console.log(d);
ee.emit("conn");