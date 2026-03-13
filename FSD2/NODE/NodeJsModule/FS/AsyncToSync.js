fs=require('fs');
fs.writeFile("Lec1.txt","JSON",function(err){
    if(err) throw err;
    console.log("File Created");
    fs.appendFile("Lec1.txt","\n we are learning NodeJS",function(err){
        if(err) throw err;
        console.log("Data Appended");
        fs.readFile("Lec1.txt","utf8",function(err,data){
            if(err) throw err; 
            console.log(data);
            console.log("Process Ended");
        });
    });
});
