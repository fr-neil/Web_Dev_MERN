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

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

const calcDisplayBal = function (movements) {
  const bal = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${bal} EUR`;
};
calcDisplayBal(account1.movements);

// reduce method passes 4 parametes unlike other methods
// accumulator, current element, index and array itself
// reduce method allows us to do mathmatical operations and store all values in just one variable which is accumulator
// eg, if we wanna sum all num from an array, the final sum will be the value of accumulator!!
// i,e it reduces an array in a single value

// eg 1
const numbers = [45, 90, -45, 65, 89];
const sum = numbers.reduce((acc, num) => acc + num);
console.log(sum);

//same example using for of loop
let sum1 = 0;
for (const value of numbers) sum1 += value;
console.log(sum1);

//eg 2
console.log(account1.movements);
const balance = account1.movements.reduce(
  (accumulator, current, index, array) => {
    console.log(`iteration ${index} : ${accumulator}`);
    return accumulator + current;
  },
  0 // we can assign accumulator before any computation, like here we specified initial value as 0
);
console.log(balance);

// eg 3
// find the maximum number in a array
const maximum = account1.movements.reduce(
  (max, current) => (max > current ? max : current),
  account1.movements[0]
);
console.log(maximum);
