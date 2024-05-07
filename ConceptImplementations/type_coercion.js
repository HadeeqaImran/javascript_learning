/*Type Coercion:
This is like when you're trying to compare apples and oranges and someone 
steps in and says, "Let me convert one of them so we can compare." In JavaScript, 
type coercion is when the language automatically converts one type of data to another 
to make certain operations possible.*/

// Example of Type Coercion

// Numeric addition
let result = 10 + 5;
console.log(result); // Output: 15

// Numeric addition with a string
result = "5" + 10; // JavaScript coerces the number 10 to a string and performs string concatenation
console.log(result); // Output: "105"

// String concatenation
let greeting = "Hello, ";
let name = "John";
result = greeting + name;
console.log(result); // Output: "Hello, John"

// Comparison with different types (Exactly this is the difference between == and === operators)
console.log(5 == "5"); // Output: true, JavaScript coerces the string "5" to a number
console.log(5 === "5"); // Output: false, strict equality operator doesn't perform type coercion