let fruits = ['apple', 'banana', 'orange'];

// ----------------------------- Push -----------------------------------
const push_return = fruits.push('grape');
console.log(fruits + ' ' + push_return); // Output: ['apple', 'banana', 'orange', 'grape']

// ----------------------------- Pop ------------------------------------
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log("After Pop: " + fruits);

// ----------------------------- Shift -----------------------------------
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log("After Shift: " + fruits)

// ---------------------------- Unshift ----------------------------------
fruits.unshift('apple');
console.log("After Unshift: " + fruits);

// ----------------------------- Slice -----------------------------------
let citrusFruits = fruits.slice(1, 3);
console.log("After Slice: " + citrusFruits);

// ----------------------------- Splice ----------------------------------
fruits.splice(1, 2, 'grape', 'kiwi');
console.log("After Splice: " + fruits);
