// Create a JSON object with two divisions, where each division has a 'name' field containing an array of employee initials. The names within each division should be sorted alphabetically. Then, merge the two sorted arrays into a single list and display the final sorted list in the console.
var test = { 
    "division1": {
        "name":["Z","B","H"]
    },
    "division2": {
        "name" :["Y","A","G"]
    }
}

console.log("Auto Question Solution");

test.division1.name.sort();
test.division2.name.sort();
let merged = test.division1.name.concat(test.division2.name);
merged.sort();
console.log(merged);

console.log("My Question Solution");

test.division1.name.sort();
test.division2.name.sort();
let merged1 = {};
merged1.division = test.division1.name.concat(test.division2.name);
merged1.division.sort();
console.log(merged1);