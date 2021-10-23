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
console.log(account.latest); // 874
account.latest = 500;
console.log(account.movements); // [45, 785, 120, 3201, 874, 500]

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
  // setting a property which already exists
  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a fullname!`);
  }
  get fullName() {
    return this._fullName;
  }
}

const vbh = new personCl(`Vaibhav jamdhade`, 2000);
vbh.greet();
vbh.calcAge();
console.log(vbh.age);

const walter = new personCl(`walter white`, 14);
