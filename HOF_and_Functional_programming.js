// 1. Calculate the total price of a customer's order
const orderList = [
    { name: "Laptop", price: 12000 },
    { name: "Mobile", price: 7000 },
    { name: "Mobile Charger", price: 1500 },
    { name: "Laptop Charger", price: 10500 },
];

function calculateTotalOrderPrice(orderList) {
    let totalPrice = 0;
    orderList.forEach(item => {
        totalPrice += item.price;
    });
    console.log(`1. The total price is: ${totalPrice}`);
}

calculateTotalOrderPrice(orderList);


// 3. Calculate tax for each expense using map method
let expenses = [
    { amount: 100, category: "Utilities" },
    { amount: 200, category: "Groceries" },
    { amount: 50, category: "Entertainment" },
];

const taxedExpenses = expenses.map(expense => ({
    amount: expense.amount * 1.1,
    category: expense.category,
}));

console.log("3. Taxed Expenses:", taxedExpenses);

// 4. Filter expenses related to the category "Groceries"
const groceriesExpenses = expenses.filter(expense => expense.category === "Groceries");
console.log("4. Groceries Expenses:", groceriesExpenses);

// 5. Calculate the total amount of all expenses using reduce method
const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log(`5. Total amount of all expenses: ${totalAmount}`);

// 6. Categorize expenses as "High Expense" or "Low Expense" based on amount
function categorizeExpense(expense) {
    return expense.amount > 100 ? "High Expense" : "Low Expense";
}

const categorizedExpenses = expenses.map(categorizeExpense);
console.log("6. Categorized Expenses:", categorizedExpenses);

// 7. Double the value of each number in the array using forEach
let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((number, index, array) => {
    array[index] = number * 2;
});

console.log("7. Modified Array:", originalNumbers);

// 8. Collect and store only the even numbers in a new array using forEach
let evenNumbers = [];
originalNumbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
});

console.log("8. Even Numbers Array:", evenNumbers);
