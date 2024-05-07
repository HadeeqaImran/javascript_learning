// A target object to have a proxy on
target = {
    name: "Hadeeqa",
    age: 21,
    degree: "Computer Science"
}

let handler = {
    set: function(target, prop, value) {
        console.log(`Setting: ${prop}`);
        target[prop] = value; 
    },

    get: function(target, prop){
        console.log(`Getting: ${prop}`)
        return target[prop];
    }
}

// Making "handler", target's proxy
let me = new Proxy(target, handler)

// Using proxy to access target object
console.log(me.name)
me.degree = "Machine Learning"
console.log(target.degree)
target.degree = "Computer Science"
console.log(me.degree)
