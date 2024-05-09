// Primitive datatypes so hold different memory locations and 
// hence when they are copied like this they are deep copied. Hence these are immutable.
// Objects like arrays and JSON objects are mutable
let x = 20;
let y = x;

y = y + 1;

console.log(x); //Output: 20 21
console.log(y); 

let first_name = "Hadeeqa";
let sec_name = first_name;
sec_name = "Imran"
console.log(first_name)
console.log(sec_name)

// To make an object immutable you can
// const immutablePerson = Object.freeze(person);