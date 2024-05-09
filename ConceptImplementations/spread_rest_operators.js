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
console.log(array_sum(1, 2, 3, 4, 5));

let person = {
    name: "Hadeeqa Imran",
    age: 21,
    degree: {
        title: "Computer Science",
        cgpa: 3.95
    }
}

// Shallow Copy - Nested object's values can be changed if the copy object changes it
// In other words, only the reference gets copied.
let updatedPerson = { ...person};
updatedPerson.degree.title = "Data Science";
console.log(person);
console.log(updatedPerson);

// Deep Copy - Nested objects are not changed 
let deep_person = JSON.parse(JSON.stringify(person))
deep_person.degree.title = "Software Engineering"
console.log(person)
console.log(deep_person);


// Scribble
array = [1, 2, 3, 4, 5]
arr = array;
arr[2] = 15
console.log(array);

function deepCopy(obj) {
    // Handle non-object types and null
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Create a new object or array based on the type of the original object
    const copy = Array.isArray(obj) ? [] : {};

    // Iterate over each property of the original object
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Recursively copy nested objects and arrays
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

let arr2 = deepCopy(array);
arr2[0] = -1;
console.log(arr2);
console.log(array);