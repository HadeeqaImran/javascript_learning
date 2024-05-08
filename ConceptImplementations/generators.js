/* Important Funcitons:
- next(): to execute the second part of the code 
- return(): acts same as a return statement inside a function
you can exit a generator regardless of how much is left 
- throw(): throw an error*/
// By the * js knows that the function is a generator
function* generator() {
    yield 1
    yield 2
    yield 3
}

const generatorObject = generator()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

// --------------------------- Use Cases --------------------------- 
// Generator IDs
function* genId(){
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

/* You can get one instance and generate ids for say table_1 then to reset you can create
another object of the same to generate ids again starting from 1 */
const genIdObj = genId()
console.log("\nUsing generator for Id Generation\n")
console.log(genIdObj.next())
console.log(genIdObj.next())
console.log(genIdObj.next())
console.log(genIdObj.next())
console.log(genIdObj.next())
console.log(genIdObj.next())
console.log(genIdObj.next())


// Use Case 2: Using generator as an iterator
function* arrIter(array) {
    for (let i = 0; i < array.length; i++){
        yield array[i]
    } 
}

console.log("\nUsing Generators as Iterators\n")
const arr = arrIter([1, 2, 3, 4])
for (const value of arr){
    console.log(value);
}

/*You can pass some value in next and then
 that is returned by yield in the generator*/
/*function* generator() {
    const increment = yield 1
     if (increment != null) {
         if += increment
     }
     else { id++ }
    yield 2
    yield 3
}*/