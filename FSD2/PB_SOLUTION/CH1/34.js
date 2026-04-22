// Create a JSON object named Home Expenses in which you have to 
// add monthly expenses of transport , food bill and  names of different 
// family members including mother,father,brother and sister.Print the 
// expenses of father with his name.

const HomeExpenses = {
    "familyMembers": ["mother", "father", "brother", "sister"],
    "expenses": {
        "transport": 500,
        "food": 1000
    }
};

console.log("Father's expenses:");
console.log("Transport: " + HomeExpenses.expenses.transport);
console.log("Food: " + HomeExpenses.expenses.food);