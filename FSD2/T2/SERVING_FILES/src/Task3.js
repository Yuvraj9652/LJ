// Write express js script to perform tasks as asked below. (Get Method)

// Create one HTML file which contains two number type input fields, one dropdown which contains options like (select, addition, subtraction, multiplication, division) and one submit button.

// The input fields must contain the value greater than 0 else it will give a message “Please enter the valid message”. Also, user must select any of the formula from the dropdown else give a message “You have not selected any formula”. (Message will be displayed on “/calc” page.)

// If one formula is selected and numbers are entered then respective calculations will be performed on the page “/calc”.


var express = require("express")
var app = express()
var path = require("path")

sp=path.join(__dirname,'../public')

app.use(express.static(sp,{index:"Task3.html"}))

app.get("/calc",(req,res)=>{
    var num1 = parseFloat(req.query.num1)
    var num2 = parseFloat(req.query.num2)
    var operation = req.query.formula
    if(isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0){
        res.send("Please enter the valid message")
    }
    else if(operation === "select"){
        res.send("You have not selected any formula")
    }
    else{
        var result;
        switch(operation){
            case "addition":
                result = num1 + num2
                break;
            case "subtraction":
                result = num1 - num2
                break;
            case "multiplication":
                result = num1 * num2
                break;
            case "division":
                result = num1 / num2
                break;
        }
        res.send("Result: " + result)
    }
})

app.listen(5678,()=>{
    console.log("Server is running on port 5678 http://localhost:5678")
})