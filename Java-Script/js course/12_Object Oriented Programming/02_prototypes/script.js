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
