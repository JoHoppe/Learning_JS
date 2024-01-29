let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

//console.log(object1 === object2);
// → true
//console.log(object1.value === object3.value);
const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
score.home = 3;
// This isn't allowed
// score = {visitors: 1, home: 1};
let { age } = { name: "Faraji", age: 23 };
//console.log(typeof(age))

const rows = 3;
const columns = 4;

function flattening(twoDimArray) {
  //Use the reduce method in combination with the concat method to “flat-
  // ten” an array of arrays into a single array that has all the elements of
  // the original arrays.
  return twoDimArray.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    [],
  );
}

function flatteningTest() {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }).fill(Math.random()),
  );
}

onwLoop = (value, tester, updater, body) => {
  while (tester(value)) {
    body(value);
    value = updater(value);
  }
  return value;
};
//onwLoop(5,(value)=>value<10,(value)=>value+=1,(value)=>console.log(value));

ownEvery1 = (arrayFunction, predicate) => {
  const array = arrayFunction();
  let output = [];
  for (let value of array) {
    predicate(value)
      ? output.push(value)
      : console.log(`${value} Does not match predicate`);
  }
  return output;
};
//ownEvery1(()=>{
//    let output=[];
//    for(let i =0;i<10;i++){
//        output.push(i);
//    }
//    return output;},
//    (value)=> {return value < 5});

const transactions = [
  { id: 1, type: "expense", amount: 30 },
  { id: 2, type: "income", amount: 50 },
  { id: 3, type: "expense", amount: 20 },
  { id: 4, type: "income", amount: 80 },
  { id: 5, type: "expense", amount: 10 },
];
//     Calculate the total income from all transactions.
//     Calculate the total expenses from all transactions.
//     Determine the current balance (income - expenses).
//     Find the transaction with the highest amount.
//     Filter the transactions to include only expenses.
//     Find the average amount of all transactions.
function calcTotalByType(transactions, type) {
  let totalIncome = 0;
  for (let object of transactions) {
    if (object["type"] === type) {
      totalIncome += object["amount"];
    }
  }
  return totalIncome;
}

/**
 *
 * @param transactions
 * @returns {number}
 */
function highestAmount(transactions) {
  let highestAmount = 0;
  transactions.forEach((element) =>
    element["amount"] > highestAmount
      ? (highestAmount = element["amount"])
      : highestAmount,
  );
  return highestAmount;
}

function filterTransaction(transaction, key, value) {
  return transaction.filter((element) => element[key] === value);
}

/**
 *
 * @param transaction expects the transaction
 * @returns {boolean} returns if the 3 ways of calculating the average are the same
 */
function averageTransaction(transaction) {
  let count = transaction.length;
  let total = 0;
  transaction.forEach((currentValue) => (total += currentValue["amount"]));
  let average3 =
    transaction.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0,
    ) / count;
  let average1 = total / count;
  let average2 =
    (calcTotalByType(transaction, "income") +
      calcTotalByType(transactions, "expense")) /
    count;

  return average1 === average2 && average2 === average3;
}

console.log(averageTransaction(transactions));
console.log(filterTransaction(transactions, "type", "expense"));
totalIncome = calcTotalByType(transactions, "income");
console.log(totalIncome);
totalExpense = calcTotalByType(transactions, "expense");
console.log(totalExpense);
console.log(totalIncome - totalExpense);
console.log("HighestTransaction: " + highestAmount(transactions));
