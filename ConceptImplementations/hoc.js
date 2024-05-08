/*HOC: A funciton which takes another function as argument is called an HOC*/
function x() {
    console.log("Namaste");
}

// x is the callback function and y is the HOC
function y(x) {
}


// This is copy pasting the code violating the DRY - Don't Repeat Yourself Principle
{
    const radius = [3, 1, 2, 4];
    const calculateArea = function(radius) {
        const output = [];
        for (let i = 0; i < radius.length; i++)
        {
            output.push(Math.PI * radius[i] * radius[i])
        }
        return output;
    }
    const calculateCircumference = function(radius) {
        const output = [];
        for (let i = 0; i < radius.length; i++)
        {
            output.push(2 * Math.PI * radius[i])
        }
        return output;
    }
}

// Better way of doing the same is under
const area = (radius) => Math.PI * radius * radius
const circumference = (radius) => 2 * Math.PI * radius

// We will pass logic inside the looping funciton
const calculate = function(radii, logic) {
    const output = [];
    for (let i = 0; i < radii.length; i++)
    {
        output.push(logic(radii[i]));
    }
    return output;
}

const radii = [1, 2, 3, 4]
console.log(calculate(radii, area))
// Same as this: radii.map(area)

// If you want a function to be available to all the arrays in your code:
Array.prototype.print = function() {
    console.log(this)
}
radii.print()
