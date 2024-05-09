arr = [1, 2]
const output = function sum(a, b) {
    return a + b;
}
// Spread operator unpacks the objects
console.log(output(...arr))

const array_sum = (...num) => {
    let accumulator = 0;
    for (i = 0; i < num.length; i++)
        {  
            accumulator =  accumulator + num[i];
        }
    return accumulator
}
// Rest operator
console.log(array_sum(1, 2, 3, 4, 5))