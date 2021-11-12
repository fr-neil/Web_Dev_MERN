// 1> public fields
// 2> public methods

// Yet to implement in next update-->
// 3> private fields
// 4> private methods
class account {
  // 1> public fields
  locale = navigator.language;

  // 2> private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    this.#movements = [];
    this.locale = navigator.language;
  }
  greet() {
    console.log(`Hello ${this.owner}`);
  }
  deposit(amount, pin) {
    if (pin === this.pin) {
      this.#movements.push(`${this.currency} ${amount}`);
      console.log(`${this.currency} ${amount}₹`);
    }
  }
  withdrawl(amount, pin) {
    this.deposit(-amount, pin);
  }
  _approveloan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveloan(val)) {
      this.#movements.push(`Loan ${val}`);
      console.log(`Loan ${val}`);
    }
  }
}

const acc1 = new account("Neel", "INR", 1234);
acc1.greet();
acc1.deposit(1000, 1234);
acc1.withdrawl(500, 1234);
acc1.requestLoan(10000);
console.log(acc1);
// console.log(acc1.#movements);   Private field '#movements' must be declared in an enclosing class
