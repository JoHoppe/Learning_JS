function triangle() {
    let output = "#";
    for (let counter = 0; counter < 9; counter++) {
        console.log(output);
        output += "#";
    }
    return 0;
}

//triangle()

//@param number is a number
function fizzBuzz(number) {
    let i = 1
    while (i <= number) {
        let output = "";
        if (i % 3 === 0) {
            output += ("fizz");
        }
        if (i % 5 === 0) {
            output += ("buzz");
        }
        if (output) console.log(i + " :" + output);
        i++;
    }
}

//fizzBuzz(100);
//@param size should be an int
function chessboard(size = 8) {
    let output = ""
    for (let i = 0; i < size; i++) {

        for (let k = 0; k < size; k++) {
            if ((k + 2 + i) % 2 === 0) output += " ";

            else output += "#";

            if (k + 1 === size) output += "\n";
        }

    }
    console.log(output);
}

function delayExe(delay, callback) {
    setTimeout(() => {
        console.log(`Executing after ${delay} milliseconds `);
        callback();
    }, delay);
}

function createAdder(x) {
    return function (y) {
        return x + y;
    }
}

// const addFive = createAdder(5);
// console.log(addFive(3)); // Output: 8
// console.log(addFive(10)); // Output: 15

function countCalls() {
    let x = 0;
    return function () {
        x++;
        return x;
    };
}

// const countObject = countCalls();
// console.log(countObject()); // Output: 1
// console.log(countObject()); // Output: 2
// console.log(countObject());// Output: 3

// Create a function that returns a counter object.
// The counter object should have two methods: 'increment' and 'getCount'.
// Use closures to achieve this.

function createCounter() {
    return {
        counter: 0,
        getCount: function () {
            return this.counter
        },
        increment: function () {
            return (this.counter++)
        }
    };
}

// const counterObj = createCounter();
// console.log(counterObj.getCount()); // Output: 0
// counterObj.increment();
// console.log(counterObj.getCount()); // Output: 1
// counterObj.increment();
// console.log(counterObj.getCount()); // Output: 2


// Create a function that takes an array of functions and a value as arguments.
// The function should return an array of results obtained by applying each function to the given value.
// Use closures to achieve this.

function applyFunctions(functions, value) {
    let results = [];

    {
        for (let i = 0; i < functions.length; i++) {
            results[i] = functions[i](value);
        }
    }

    return results;
}

// const addTwo = x => x + 2;
// const multiplyByThree = x => x * 3;
// const square = x => x * x;
// const functionsArray = [addTwo, multiplyByThree, square];
// console.log(applyFunctions(functionsArray, 5)); // Output: [7, 15, 25]
