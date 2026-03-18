// Create own Node.js module (t1.js). 

// 1. Parses a given URL to extract query parameters. 

// 2. Validates that all parameters (a, b, c, d) are non-negative integers. 

// 3. Evaluates the mathematical expression: a*c - a/d + b 

// 4. Returns the computed result or an error message if any parameter is negative. 


//     The main script (t2.js) should require the module. 

//     Pass a sample URL ("http://example.com/calculate?a=20&b=30&c=40&d=-1") with query parameters (a=20, b=30, c=40,  

//     d=-1). Display the evaluation result. 


var EventEmmiter=require("events");
var ee=new EventEmmiter(); 
ee.on("calculate",(err,result)=>{
    if(err){
        console.log("Error in calculation");
    }
    else{
        console.log("Result is "+result);
    }
});
function calculate(url){
    let params=url.split("?")[1].split("&");
    let a=0,b=0,c=0,d=0;
    for(let i=0;i<params.length;i++){
        let param=params[i].split("="); 
        if(param[0]=="a"){
            a=parseInt(param[1]);
        }
        else if(param[0]=="b"){
            b=parseInt(param[1]);
        }
        else if(param[0]=="c"){
            c=parseInt(param[1]);
        }
        else if(param[0]=="d"){
            d=parseInt(param[1]);
        }
    }
    if(a<0 || b<0 || c<0 || d<0){
        ee.emit("calculate",true);
    }
    else{
        let result=a*c - a/d + b;
        ee.emit("calculate",false,result);
    }
}
calculate("http://example.com/calculate?a=20&b=30&c=40&d=-1");

