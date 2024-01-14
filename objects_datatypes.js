let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 === object2);
// → true
console.log(object1.value === object3.value);
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
score.home=3
// This isn't allowed
// score = {visitors: 1, home: 1};
let {age} = {name: "Faraji", age: 23};
console.log(typeof(age))