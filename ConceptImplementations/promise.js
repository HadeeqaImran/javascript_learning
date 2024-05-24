const axios = require("axios")

// Anything written inside then is executed after some result is returned
// Other stuff written underneath it executed sequentially.
axios.get("https://www.boredapi.com/api/activity")
    .then(response => {
        console.log(response.data.activity)
    })
    .catch(error => {
        console.log(error)
    })

// Apart from this chaining, we can use await keyword to make our code simpler
async function getActivity() {
    const result = await axios.get("https://www.boredapi.com/api/activity")
    console.log(result)
}

// async - enables a function to know that a promise will be returned
// await - actually waits for the promise to get returned

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
        // Assuming the operation was successful, we resolve the promise with a value
        resolve("Data successfully fetched");
    }, 2000); // Simulating a delay of 2 seconds
});

// Consuming the Promise
myPromise.then((data) => {
    // This callback function is executed when the promise is resolved
    console.log(data); // Output: Data successfully fetched
}).catch((error) => {
    // This callback function is executed if the promise is rejected
    console.error(error);
});

