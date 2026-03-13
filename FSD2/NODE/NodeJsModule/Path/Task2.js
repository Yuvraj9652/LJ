// Using Node.js, write a Node.js script that uses the Node.js Path Module and the Node.js File System Module with asynchronous methods to perform the following operations for the path FSD-mern/path.txt

// Extract the directory name from the given file path using the Path module.

// Create the extracted directory inside an existing folder using the asynchronous methods of the fs module.

// Extract the file name from the given path using the Path module.

// Create a file with the extracted file name inside the newly created directory and write some data into it.

// Copy the contents of this file to another file using an asynchronous file operation.

// Delete the original file after successfully copying the content.

// Note: All file operations must be performed using asynchronous methods of the fs module.

fs=require("fs");
pm=require("path");

var filePath="FSD-mern/path.txt";

// Extract the directory name
var dirName=pm.dirname(filePath);
console.log("Directory Name:", dirName);

// Create the extracted directory inside an existing folder
fs.mkdir(dirName, { recursive: true }, (err) => {
    if (err) {
        return console.error("Error creating directory:", err);
    }
    console.log("Directory created successfully.");

    // Extract the file name
    var fileName=pm.basename(filePath);
    console.log("File Name:", fileName);
    var newFilePath=pm.join(dirName, fileName);

    // Create a file with the extracted file name and write some data into it
    fs.writeFile(newFilePath, "This is some sample data.", (err) => {
        if (err) {
            return console.error("Error writing to file:", err);
        }
        console.log("File created and data written successfully.");

        // Copy the contents of this file to another file
        var copyFilePath=pm.join(dirName, "copy_" + fileName);
        fs.copyFile(newFilePath, copyFilePath, (err) => {
            if (err) {
                return console.error("Error copying file:", err);
            }
            console.log("File copied successfully.");
            
            // Delete the original file after successfully copying the content
            fs.unlink(newFilePath, (err) => {
                if (err) {
                    return console.error("Error deleting original file:", err);
                }
                console.log("Original file deleted successfully.");
            });
        });
    });
});


// fs=require("fs");
// path=require("path");

// let p="FSD-mern/path.txt";
// let dir=path.dirname(p);
// let fname=path.basename(p);
// let newPath=dir+"/"+fname;

// fs.mkdir(dir,(err)=>{
//     if(err) throw err
//     console.log("Directory created");
//     fs.writeFile(newPath,"Data write",(err)=>{
//         if(err) throw err
//         console.log("File created");
//         fs.copyFile(newPath,dir+"/temp.txt",(err)=>{
//             if(err) throw err
//             console.log("File Copied");
//             fs.unlink(newPath,(err)=>{
//                 if(err) throw err
//                 console.log("Deleted");
//             });
//         });
//     });
// });