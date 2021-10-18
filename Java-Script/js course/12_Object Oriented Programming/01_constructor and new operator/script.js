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
