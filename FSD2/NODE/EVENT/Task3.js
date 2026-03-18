// Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, print the line “Thanks for using my program” on console. All read/write operations are asynchronous. (using Event)


var EventEmmiter=require("events");
var ee=new EventEmmiter();
var fs=require("fs");

ee.on("write",(err)=>{
    if(err){
        console.log("Error in writing file");
    }
    else{
        console.log("File written successfully");
        ee.emit("append");
    }
});

ee.on("append",(err)=>{
    if(err){
        console.log("Error in appending file");
    }
    else{
        console.log("File appended successfully");
        ee.emit("read");
    }
});

ee.on("read",(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data);
        console.log("Thanks for using my program");
    }
});

fs.writeFile("new.txt","This is data",function(err){
    ee.emit("write",err);
});

fs.appendFile("new.txt"," that is data",function(err){
    ee.emit("append",err);
});
fs.readFile("new.txt","utf-8",function(err,data){
    ee.emit("read",err,data);
});


// ee.on("CRUD",()=>{
//     fs.writeFile("new.txt","This is data",()=>{
//         console.log("File written successfully");
//     });
// });
// ee.on("CRUD",()=>{
//     fs.appendFile("new.txt"," that is data",()=>{
//         console.log("File appended successfully");
//     });
// });
// ee.on("CRUD",()=>{
//     fs.readFile("new.txt","utf-8",(err,data)=>{
//         if(err){
//             console.log("Error in reading file");
//         }
//         else{
//             console.log("File read successfully");
//             console.log(data);
//             console.log("Thanks for using my program");
//         }
//     });
// });
// ee.on("CRUD",()=>{
//     console.log("CRUD operations completed");
// });
// ee.emit("CRUD");