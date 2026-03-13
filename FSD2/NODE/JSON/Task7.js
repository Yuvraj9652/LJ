//  Write a JS to store an array of objects having name and age. display name and age of person with highest age.
const person =[
    {
        name: "PQR", age: 38
    },
    {
        name: "ABC", age: 35
    },
    {
        name: "XYZ", age: 47
    }
]

console.log("Question Solution:");


let max = person[0].age;
let name = person[0].name;
for(let i of person){
    if(i.age > max){
        max = i.age;
        name = i.name;
    }
}
console.log("Name:", name, "Age:", max);

console.log("Question Solution using sort:");
person.sort((a, b) => b.age - a.age);
console.log("Name:", person[0].name, "Age:", person[0].age);

console.log("Person array:", person," \n after sorting");