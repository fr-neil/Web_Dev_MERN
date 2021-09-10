"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// 1 -> slice();
console.log(`----------slice()----------`);
const arr = [`a`, `b`, `c`, `d`, `e`];
console.log(arr);
console.log(arr.slice(-1)); //returns last element in array
console.log(arr.slice(0, 4)); // doesn't include end index element
console.log(arr.slice(3)); // returns elements starting rom third element
console.log(arr.slice(1)); // removes 0th index element and returns a new array

// 2 -> splice();
console.log(`----------splice()----------`);
// splice works little simillar to slice but
// splice mutates the original array, it doesn't returns new array
// sometimes splice used to delete elements from an array

let arr2 = [`aa`, `bb`, `cc`, `dd`, `ee`];
console.log(arr2);
console.log(arr2.splice(-1)); //deletes last element from an array
console.log(arr2);
console.log(arr2.splice(1, 2)); // removes 1st al well as 2nd element from array i.e, bb and cc
console.log(arr2); // returns mutated array includes aa dd
arr2 = [`aa`, `bb`, `cc`, `dd`, `ee`];
console.log(arr2);
console.log(arr2.splice(1)); // deletes all element from an array, excluding index we given for 1st
console.log(arr2); // i.e, it will remove all elements from an array and returns only 'aa'

// 3 -> reverse()
console.log(`----------reverse()----------`);
// simply reverse the given array
// reverse() method doesn't take arguments
const arr3 = [`z`, `y`, `x`, `w`, `v`];
console.log(arr3);
console.log(arr3.reverse());

// 4 -> concat();
// concat method simply merges two or more arrays and returns a new array

console.log(arr.concat(arr3));
console.log(arr.concat(arr3, arr));
// or we can simply use spread operator
console.log([...arr, ...arr3]);

// 5 -> join();
// join() method simply joins given array with given argument
// here we need to give an argument to join arrays
// eg-

console.log([arr3.join(`-`)]);
console.log([arr3.concat(arr).join(`-`)]);
