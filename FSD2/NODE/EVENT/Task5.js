// Create a Node.js program using the events module to demonstrate:

// Registering multiple event listeners for different events (myEvent1, myEvent2).

// Removing a specific event listener (removeListener) for myEvent2.

// Removing all listeners associated with myEvent1 (removeAllListeners).

// Triggering events and observing which listeners execute.

var EventEmmiter=require("events");
var ee=new EventEmmiter();
let l1=function listener1(){
    console.log("I am listner1")
}
let l2=function listener2(){
    console.log("I am listner2")
}
ee.on("myEvent1",l1);
ee.on("myEvent1",l2);
ee.on("myEvent2",l1);
ee.on("myEvent2",l2);
ee.emit("myEvent1");
ee.emit("myEvent2");
ee.removeListener("myEvent2",l1);
ee.emit("myEvent2");
ee.removeAllListeners("myEvent1");
ee.emit("myEvent1");
