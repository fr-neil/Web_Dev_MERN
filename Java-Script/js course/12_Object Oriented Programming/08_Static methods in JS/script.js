const account = {
  owner: `Vbh`,
  movements: [45, 785, 120, 3201, 874],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 500;
console.log(account.movements);

// static method
account.bal = function () {
  console.log(`Total balance: 0`);
};
account.bal();

class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  greet() {
    console.log(`Hello ${this.fullName}!`);
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a fullname!`);
  }
  get fullName() {
    return this._fullName;
  }
  // static method
  static hey() {
    console.log(`Hey there!`);
  }
}

const vbh = new personCl(`Vaibhav jamdhade`, 2000);
vbh.greet();
vbh.calcAge();
console.log(vbh.age);

const walter = new personCl(`walter white`, 14);

// static methods are not availible on prototypes, unlike other instance methods
// eg. Array.from()
// this won't work on
// const arr = [45, 452, 988, 144]
// arr.from() will throw an error, cause from() is an static method which could only be used on Array function
