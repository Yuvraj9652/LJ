myObj = {
  "name" : "John",
  "age" : 30,
  "cars" : [
            { "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },
            { "name" : "BMW", "models" : [ "320", "X3", "X5" ] },
            { "name" : "Fiat", "models" : [ "500", "Panda" ] }
          ]
}
// Make a statement : "John has BMW- X3 at the age of 30" in web browser console.
console.log(myObj.name + " has " + myObj.cars[1].name + "- " + myObj.cars[1].models[1] + " at the age of " + myObj.age);