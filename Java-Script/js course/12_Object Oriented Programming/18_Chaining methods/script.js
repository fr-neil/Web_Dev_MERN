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
  getMovements() {
    return this.#movements;
  }
  deposit(amount, pin) {
    if (pin === this.pin) {
      this.#movements.push(`${this.currency} ${amount}`);
      console.log(`${this.currency} ${amount}₹`);
    }
    return this;
  }
  withdrawl(amount, pin) {
    this.deposit(-amount, pin);
    return this;
  }
  _approveloan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveloan(val)) {
      this.#movements.push(`Loan ${val}`);
      console.log(`Loan ${val}`);
      return this; // returning the account1 itself
    }
  }
}

const acc1 = new account("Neel", "INR", 1234);
acc1.greet();
acc1.deposit(1000, 1234);
acc1.withdrawl(500, 1234);
acc1.requestLoan(10000);
console.log(acc1);
acc1
  .deposit(1000, 1234)
  .deposit(1000, 1234)
  .deposit(1000, 1234)
  .withdrawl(500, 1234)
  .requestLoan(10000);
console.log(acc1.getMovements());
