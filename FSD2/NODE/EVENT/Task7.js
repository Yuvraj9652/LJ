// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks and displays the total marks on console as an output.The calculate event fires another event name percentage which takes total marks as argument and percentage should get displayed in console.

var EventEmmiter=require("events");
var ee=new EventEmmiter();  
ee.on("calculate",(m1,m2,m3,m4,m5)=>{
    let total=m1+m2+m3+m4+m5;
    console.log("Total marks is "+total);
    ee.emit("percentage",total);
});
ee.on("percentage",(total)=>{
    let percentage=(total/125)*100;
    console.log("Percentage is "+percentage+"%");
});
ee.emit("calculate",20,22,18,24,25);



// e=require("events")
// ee=new e();
// ee.on("calculate",(a,b,c,d,e)=>{
//     total=a+b+c+d+e;
//     console.log(total);
//     ee.emit("percentage",total);
// });
// ee.on("percentage",(total)=>{
//     per=total*100/125;
//     console.log(per);
// });
// ee.emit("calculate",20,22,18,24,25);