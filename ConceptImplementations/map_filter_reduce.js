const arr = [1, 2, 3, 4, 5]

// Map: Iterate over all elements of array.
// Convert arr to binary strings
const output = arr.map((x) => x.toString(2))
console.log(output)

// Filter: Literally to choose values based on some logic
function isOdd(val){
    return val % 2;
}
const odd = arr.filter(isOdd);
console.log(odd)
// This can also be written as: arr.filter((x) => x % 2)

// Reduce: To reduce an array to on scalar based on some criteria
// Takes two arguments acc (it is the operator you are using) and curr (whatever is the current value)
const sum = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc
}, 0) // Zero is the initial value of the acc variable

const max = arr.reduce(function(max, curr) {
    if(max < curr){
        max = curr;
    }
    return max;
}, arr[0])

console.log(sum + " " + max)

// These methods can be chained as well to get the desired result.