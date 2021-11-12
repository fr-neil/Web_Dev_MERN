class personCl {
  constructor(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }
  calcAge() {
    return 2037 - this.birthYear;
  }
}

class studentCl extends personCl {
  constructor(firstName, birthYear, course) {
    // this, always need to happen first
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`Hello, this is ${this.firstName} and i study ${this.course}!`);
  }
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student i feel like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const vbh = new studentCl(
  `Vaibhav the mad scientist`,
  2000,
  `Computer fking science`
);

vbh.calcAge();
vbh.introduce();
