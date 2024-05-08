console.log(true + false); // Output: 1, true is coerced to 1 and false is coerced to 0

console.log(12 / "6"); // Output: 2, "6" is coerced to a number before division

console.log("number" + 15 + 3); // Output: "number153", concatenation starts from left to right

console.log(15 + 3 + "number"); // Output: "18number", concatenation starts from left to right

console.log([1] > null); // Output: true, [1] is coerced to 1, and null is coerced to 0, so 1 > 0

console.log("foo" + + "bar"); // Output: "fooNaN", +"bar" results in NaN

console.log('true' == true); // Output: false, string 'true' is not equal to boolean true

console.log(false == 'false'); // Output: false, boolean false is not equal to string 'false'

console.log(null == ''); // Output: false, null is not equal to an empty string

console.log(!!"false" == !!"true"); // Output: true, both !!"false" and !!"true" evaluate to true

console.log(['x'] == 'x'); // Output: true, the string representation of the array ['x'] is equal to the string 'x'

console.log([] + null + 1); // Output: "null1", empty array coerced to empty string, then concatenated with null and 1

console.log([1,2,3] == [1,2,3]); // Output: false, arrays are compared by reference, not by value

console.log({}+[]+{}+[1]); // Output: "0[object Object]1", {} is coerced to NaN, then concatenated with [], etc.

console.log(!+[]+[]+![]); // Output: "truefalse", !+[] is true, [] is coerced to an empty string, ![] is false

console.log(new Date(0) - 0); // Output: 0, new Date(0) is converted to the number of milliseconds since the epoch, which is 0

console.log(new Date(0) + 0); // Output: "Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)0", new Date(0) is converted to a string, then concatenated with 0

/*
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
*/


/*
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true
*/

/*
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
*/

/*When applying == to null or undefined, numeric conversion does not happen. 
null equals only to null or undefined, and does not equal to anything else.*/

/*NaN does not equal to anything even itself:
if (value !== value) { console.log("we're dealing with NaN here") }*/

/**/