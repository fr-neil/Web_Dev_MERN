"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
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
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `New to BANKIST?, Create an account!`;
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const deposit = (mov) => mov > 0;
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername?.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    inputCloseUsername.value = inputClosePin.value = "";
    inputLoginPin.blur();
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started!`;
  }
});

// Flat() and flatmap() method
// flat method combines a nested array and gives an single array containing all elements from all nested arrays
//e.g
const arr = [[1, 2, 3], [4, 5, 6], [7, 8], 9, 10];
console.log(arr.flat());

// but what if we have, multilevel nested arrays?
// well we can simply tell flat method how much deep to go
// syntax - arr.flat(2) // it'll go 2 levels deeper and return an array
// e.g
const arr2 = [[1, 2, [0, 1], 3], [4, 5, [11, 13], 6], [7, 8], 9, 10];
console.log(arr2.flat(2));

// some real world use case
// now we'll simply try to get all movements from all user accounts

const overallBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// but there's a another method which boosts performance
// faltmap() it simply map and flat array in one go
// e.g
const overallBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// sorting arrays
// sort() method
const friends = [`viccky`, `vic`, `vaibhav`, `yogesh`, `yogi`, `Nil`, `Cylax`];
console.log(friends.sort());
// here, sort method mutates the original array
console.log(friends);
// sort method doesn't actually work on numbers, it's effective on strings
const payments = [-412, 45, 12.12, 78, 4569, -78, 0.124, 654];
console.log(payments.sort()); // [-412, -78, 0.124, 12.12, 45, 4569, 654, 78]
// here sort method sorts numbers an an string, i.e, (-, +, *. /) then numbers
// to sort numbers with sort method we've to
// ascending order
payments.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(payments); // [-412, -78, 0.124, 12.12, 45, 78, 654, 4569]

// descending order
payments.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(payments); //[4569, 654, 78, 45, 12.12, 0.124, -78, -412]

// boosting performance
payments.sort((a, b) => b - a);
console.log(payments); //[4569, 654, 78, 45, 12.12, 0.124, -78, -412]

payments.sort((a, b) => a - b);
console.log(payments); //[-412, -78, 0.124, 12.12, 45, 78, 654, 4569]

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// we use Array.from() method to build an array from scratch, like we can give the length for array
const random = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 100) + 1
);
console.log(random);

const z = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener(`click`, function () {
  const movUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    (el) => Number(el.textContent.replace(`€`, ""))
  );
  console.log(movUI);
});

// exercise 1
// find the total deposited amount in the bank

const totalDeposit = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((TtlDep, cur) => TtlDep + cur, 0);
console.log(totalDeposit);

// exercise 2
// find deposits of at least 1000

const numDeposit = accounts
  .flatMap((acc) => acc.movements)
  .reduce((dep, cur) => (cur >= 1000 ? ++dep : dep), 0);
console.log(numDeposit);

// exercise 3
// find all deposits as well as withdrawls from bank and store them in a object

const { deposits, withdrawls } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      sum[cur > 0 ? "deposits" : `withdrawls`] += cur; // this is same as sum.deposits or sum.withdrawls to store value in a object
      return sum;
    },
    {
      deposits: 0,
      withdrawls: 0,
    }
  );
console.log(`Deposits: ${deposits}`);
console.log(`Withdrawls: ${withdrawls}`);

// exercise 4
// convert any string into titleCase
// eg. Hello My Name is Something, And I Am a Engineer from a Asia

const titleCase = (phrase) => {
  const exceptions = [
    `a`,
    `an`,
    `and`,
    `but`,
    `else`,
    `for`,
    `in`,
    `is`,
    `or`,
    `on`,
    `the`,
    `this`,
    `to`,
    `with`,
  ];
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const title = phrase
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(title);
};

console.log(
  titleCase(`Hello My Name is Something, And I Am a Engineer from Asia`)
);
console.log(
  titleCase(`and i would like to do something for this or maybe such situation`)
);
