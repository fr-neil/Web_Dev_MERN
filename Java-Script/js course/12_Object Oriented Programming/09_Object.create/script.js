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

// object.create
// object.create creates a new object, and the prototype of that object will be the object that we pass in it
//recreating person object to demonstarte object.create() method

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const yogi = Object.create(personProto);
console.log(yogi);
yogi.init(`Yogesh`, 2000);
yogi.calcAge();
