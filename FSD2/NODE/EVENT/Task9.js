// Write a node.js script using Event handling to perform following tasks in sequence:

// Create a folder named Test.

// Create file in it named abc.txt and enter data into it.

// Append data to that file abc.txt and print message “Data Appended Successfully”.

// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).

// Copy data from abc.txt to pqr.txt.

// Delete old file and Lastly print the message “All operations performed successfully” on console.

// Perform using Synchronous file system module.

var EventEmmiter=require("events");
var ee=new EventEmmiter();
var fs=require("fs");
var path=require("path");
ee.on("createFolder",(err)=>{
    if(err){
        console.log("Error in creating folder");
    }
    else{
        console.log("Folder created successfully");
        ee.emit("createFile");
    }

});
ee.on("createFile",(err)=>{
    if(err){
        console.log("Error in creating file");
    }
    else{
        console.log("File created successfully");
        ee.emit("appendData");
    }
});
ee.on("appendData",(err)=>{
    if(err){
        console.log("Error in appending data");
    }
    else{
        console.log("Data appended successfully");
        ee.emit("readFile");
    }
});
ee.on("readFile",(err,data)=>{
    if(err){
        console.log("Error in reading file");
    }
    else{
        console.log("File read successfully");
        console.log(data);
        ee.emit("copyFile");
    }
});
ee.on("copyFile",(err)=>{
    if(err){
        console.log("Error in copying file");
    }
    else{
        console.log("File copied successfully");
        ee.emit("deleteFile");
    }
});
ee.on("deleteFile",(err)=>{
    if(err){
        console.log("Error in deleting file");  
    }
    else{
        console.log("File deleted successfully");
        console.log("All operations performed successfully");
    }
});

fs.mkdir("Test",function(err){
    ee.emit("createFolder",err);
});
fs.writeFile(path.join("Test","abc.txt"),"This is data",function(err){
    ee.emit("createFile",err);
});
fs.appendFile(path.join("Test","abc.txt")," that is data",function(err){
    ee.emit("appendData",err);
});
fs.readFile(path.join("Test","abc.txt"),"utf-8",function(err,data){
    ee.emit("readFile",err,data);
});
fs.copyFile(path.join("Test","abc.txt"),path.join("Test","pqr.txt"),function(err){
    ee.emit("copyFile",err);
});
fs.unlink(path.join("Test","abc.txt"),function(err){
    ee.emit("deleteFile",err);
});



// fs=require("fs");
// console.log(fs.existsSync(path.join("Test","abc.txt")));