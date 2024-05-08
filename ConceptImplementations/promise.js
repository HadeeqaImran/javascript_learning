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

function returnsPromise(val){
    return new Promise(() => {
        setTimeout(() => {
            if (val == true){
                resolve(true);
            }
            else{
                reject(false);
            }
        }, 1000)
    })
}