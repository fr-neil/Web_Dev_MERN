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
