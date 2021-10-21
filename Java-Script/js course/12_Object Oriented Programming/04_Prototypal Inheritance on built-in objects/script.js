`use strict`;
// constuctor functions and new operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jns = new Person(`jonas`, 2002);
console.log(jns);
// 1> new empty {} is created
// 2> function is called, {} = this
// 3> linked to prototype

const vbh = new Person(`vaibhav`, 2001);
const yog = new Person(`yogesh`, 1999);
console.log(vbh, yog);
// here jns, vbh and yog are instances of person

// prototypes
Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};

console.log(Person.prototype);
jns.calcAge();
vbh.calcAge();

//any object always has access to the methods and properties from it's prototypes
// eg. prototype of jns is person.prototype

console.log(jns.__proto__);
console.log(jns.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(vbh)); // true

//
Person.prototype.species = "Sapiens";
console.log(jns.species, vbh.species);

//
console.log(jns.hasOwnProperty(`firstName`)); //true
console.log(jns.hasOwnProperty(`Species`)); //false

console.log(jns.__proto__);
console.log(jns.__proto__.__proto__);
console.log(jns.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [41, 78, 65, 120, 87, 369, 417, 9874];
console.log(arr.__proto__); // all methods we can use on arrays, literally everything we use on arrays...
console.log(arr.__proto__ === Array.prototype); // true

// using prototype we can create new methods for Array constructor
// eg.
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const numbers = [41, 547, 41, 247, 41, 214, 41, 214, 41, 214, 41];
console.log(numbers.unique());

const h1 = document.querySelector(`h1`);
console.dir(h1);
