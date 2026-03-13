// Write a JSON object which contains array of 3 objects. Each object contains 2 properties name and height. Now, sort an array values by height in descending order. Print name in terminal as per the sorted height.

const student = [
    {
        name: "ABC", height: 5.7
    },
    {
        name: "PQR", height: 6.0
    },
    {
        name: "XYZ", height: 6.2
    }
]

student.sort((a, b) => b.height - a.height);
for(let i of student){
    console.log(i.name);
}
