
var EventEmmiter=require("events");
var ee=new EventEmmiter();

var connectHandler = function connect(){

  console.log("connection successful");
  ee.emit("data-received")    	//fire data-received event
}
ee.on("connection",connectHandler); //<-- Or You can write whole function inplace of "connecthandler"

ee.on("data-received",function(){console.log("data received successfully")});
// or
//ee.on('eventName', () => {// Event handler code});

ee.emit("eventName");
