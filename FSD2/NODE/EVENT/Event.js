var EventEmmiter=require("events");
var ee=new EventEmmiter();
// ee.emit("mrgfunction");          It will generate error
ee.on("mrgfunction",()=>{
    console.log("Today is my wedding day");
});
ee.emit("mrgfunction");


// event.addListener(eventNames,Listener);
// event.on(eventName,listener);
// event.once(Eventname,listener);

