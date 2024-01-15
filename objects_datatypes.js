let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
//
// console.log(object1 === object2);
// // → true
// console.log(object1.value === object3.value);
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
score.home = 3
// This isn't allowed
// score = {visitors: 1, home: 1};
let {age} = {name: "Faraji", age: 23};

// console.log(typeof(age))


function deepEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null) {
        return true;
    } else if (obj1 === obj2) {
        return true;
    } else if (typeof obj1 === typeof obj2) {
        if (Object.keys(obj1).length === Object.keys(obj2).length) {
            for (let key of Object.keys(obj1)) {
                if (typeof (obj1[key] === "object")) {
                    return deepEqual(obj1[key], obj2[key]);
                } else if (obj1[key] !== obj2[key]) {
                    return false
                }
            }
            return true
        }
    }
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
