// Write node js script designed for laptop having 6GB of RAM which require to monitor system memory usage and emit a custom event named “Threshold”. When the memory usage exceeds specified threshold of 50% there will be a message “Memory Threshold Exceeded” along with used data should be displayed on console after every 1 second of Interval.

var EventEmmiter=require("events");
var ee=new EventEmmiter();
var os=require("os");   
ee.on("Threshold",(used)=>{
    console.log("Memory Threshold Exceeded");
    console.log("Used Memory is "+used+" bytes");
});
setInterval(()=>{
    let total=os.totalmem();
    let free=os.freemem();
    let used=total-free;
    let percentage=(used/total)*100;
    if(percentage>50){
        ee.emit("Threshold",used);
    }
},1000);
