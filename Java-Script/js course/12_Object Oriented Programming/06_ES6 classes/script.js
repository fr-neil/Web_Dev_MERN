`use strict`;

class personCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  greet() {
    console.log(`Hello ${this.firstName}!`);
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
}

const vbh = new personCl(`Vaibhav`, 2000);
vbh.greet();
vbh.calcAge();

// NOTES
// 1> Classes are not hoisted
// 2> Classes are first class citizens, i.e we can use them as arguments
// 3> Classes are always executed in strict mode
