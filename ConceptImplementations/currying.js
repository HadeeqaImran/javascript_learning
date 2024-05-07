function multiply(x, y){
    return x * y;
}

/* Currying: Think of it like preparing a meal. Instead of putting all the 
ingredients in at once, you add them one by one. In programming, currying is
like breaking down a function that takes multiple arguments into a series of
functions, each taking only one argument. */

// Currying of multiply function
function currying_multiply(x){
    function multiply(y){
        return x * y;
    }
    return multiply;
}

const multiplByFive = currying_multiply(5);
console.log(multiplByFive(3));