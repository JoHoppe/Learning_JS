function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("resolved after :" + `${ms}` + "ms");
            resolve();
        }, ms);
    });
}

wait(100);

//Chaining Promises:
//     Write a function double
//     that takes a number x as an argument and returns a Promise that resolves with x * 2.
//     Use double to create a chain of promises that doubles a number three times and
//     then logs the final result.

function double(x) {
    return new Promise((resolve) => {
        resolve(x * 2);
    });
}

let x = 2;
console.log(x);
double(x)
    .then(double)
    .then(double)
    .then((result) => {
        x = result;
        console.log(x);
    });
//Promise Error Handling:
//
//     Write a function divide that takes two numbers a and b as arguments and returns a
//     Promise that resolves with the result of a / b.
//     Handle errors in the Promise chain by catching any division by zero errors and
//     logging an appropriate message.
function divide(a, b) {
    return new Promise((resolve) => {
        if (b !== 0) {
            let result = a / b;
            resolve(result);
        } else {
            resolve(NaN);
        }
    });
}

divide(1, 0).then((result) => console.log(result));
divide(2, 3).then((result) => console.log(result));

//    Write a function fetchData that simulates fetching data from an API. It should return
//    a Promise that resolves with some data after a short delay.
//     Create an array of Promises by calling fetchData multiple
//     times with different parameters.
//     Use Promise.all to wait for all Promises to resolve and then log the array of data.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(Math.random()), 50);
    });
}

function processData(result) {
    console.log(result);
    x = result;

    if (x <= 1) {
        // Exit the loop or perform any other action
        return;
    }

    // Otherwise, continue fetching data
    fetchData().then(processData);
}


//Write a function calculate which accepts two numbers and a callback function.
// Inside the function, perform a calculation (e.g., addition, subtraction) with the two numbers
// and pass the result to the callback. Test the function with different operations and callback
// functions.
function calculate(num1, num2, callback) {
    callback((num1 + num2)).then(result => console.log(result));
}

calculate(10, 4, double)

//Write a function fetchAndProcessData which accepts a URL and two callback functions (successCallback and errorCallback).
// Inside the function, fetch data from the provided URL using Promises. If the request is successful,
// call the successCallback with the fetched data. If there's an error, call the errorCallback with the error message.
function fechtAndProcessData(sucCallback, failCallback) {
    let data = new Promise((resolve,reject) => {
        fetchedData = fetchData();
        if (fetchedData > 0.5) {
            resolve({"status": 200, "value": fetchedData})
        } else {
            reject({"status": 400, "value": NaN})
        }
    })
    if(data["status"]===200){
        sucCallback(data["value"]);
    }
    else {
        failCallback(data[ "status"]);
    }

}