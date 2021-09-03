`use strict`;

const lufthansa = {
  Airline: `lufthansa`,
  code: `LH`,
  bookings: [],
  // new syntax to define function in a object
  book(flightNum, Name) {
    console.log(
      `${Name} booked a seat on ${this.Airline} flight ${this.code}${flightNum}`
    ); //here this keyword points toward lufthansa i.e, lufthansa.code
    this.bookings.push({ flight: `${this.code} ${flightNum}`, Name });
  },
};

//calling book function from lufthansa object
lufthansa.book(233, `CyLax programmer`);
console.log(lufthansa);

// defining a new object to use function declared in upper object
const euroWings = {
  Airline: `EuroWings`,
  code: `EW`,
  bookings: [],
};

// creating a copy of lufthansa.book in new book function
const book = lufthansa.book;

// functions are nothing but objects and objects are nothing but values, hence we can use various methods for functions
// here, call() method is helping this keyword to point towards eurowings
book.call(euroWings, 451, `Pradyensh`);
console.log(euroWings);

// or we can also pass a array

const CyLax = [454, `Cylax programmer`];
book.call(euroWings, ...CyLax);
console.log(euroWings);

// using bind method
// bind() method actually helps us to copy the method
// here, we made an new instance of book method and stored it in a costom variable, which can later be used
const bookEW = book.bind(euroWings);
bookEW(12, `Vaibhav`);
console.log(euroWings);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// as we know this keyword is set dynamically, eventlistener calling lufthansa.buyplane
// therefore, this keyword now point to the button '.buy'
// hence, we have to use bind() keyword to manually set this keyword to lufthansa object, as below
document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// paartial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.13, 200));

const addVAT = addTax.bind(null, 0.25);
console.log(addVAT(200));

const addRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
addRate(0.25)(200);
