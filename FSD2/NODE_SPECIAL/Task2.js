const { count } = require("console");

fs=require("fs");
fs.mkdir("tempReports",(err)=>{
    if (err){ throw err}
    fs.writeFile("tempReports/daily.txt","Report Start",(err)=>{
        if (err){ throw err}
        fs.appendFile("tempReports/daily.txt","\nEntry 1: Success",(err)=>{
            if (err){ throw err}
            fs.appendFile("tempReports/daily.txt","\nEntry 2: Warning",(err)=>{
                if (err){ throw err}    
                fs.appendFile("tempReports/daily.txt","\nEntry 3: Success",(err)=>{
                    if (err){ throw err}
                    fs.readFile("tempReports/daily.txt","utf-8",(err,data)=>{
                        if (err){ throw err}
                        countSuccess=0;
                        for(let i=0;i<data.split("\n").length;i++){
                            if(data.split("\n")[i].includes("Success")){
                                countSuccess++;
                            }
                            if(countSuccess>=3){
                                fs.unlink("tempReports/daily.txt",(err)=>{
                                    if (err){ throw err}
                                    fs.rmdir("tempReports",(err)=>{
                                        if (err){ throw err}
                                        return;
                                    });
                                });
                            }
                        }
                    });
                });
            });
        });
    });
});