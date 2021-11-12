const person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

const student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(person.prototype);

student.prototype.introduce = function () {
  console.log(`Hello, this is ${this.firstName} and i study ${this.course}!`);
};

const vbh = new student(`Vaibhav`, 2001, `Computer science`);
vbh.introduce();
console.log(vbh.calcAge());
student.prototype.constructor = student;
console.log(vbh instanceof student);
console.log(vbh instanceof person);
console.log(vbh instanceof Object);
