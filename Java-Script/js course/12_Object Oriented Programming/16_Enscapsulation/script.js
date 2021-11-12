class account {
  constructor(owner, currency, _pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = _pin;
    this._movements = [];
    this.locale = navigator.language;
  }
  greet() {
    console.log(`Hello ${this.owner}`);
  }
  deposit(amount, _pin) {
    if (_pin === this._pin) {
      this._movements.push(`${this.currency} ${amount}`);
      console.log(`${this.currency} ${amount}₹`);
    }
  }
  withdrawl(amount, _pin) {
    this.deposit(-amount, _pin);
  }
  _approveloan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveloan(val)) {
      this._movements.push(`Loan ${val}`);
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

// JS yet not support pure enscapsulation, hence developer uses the conventon which everyone in the dev team could understand
// eg. adding _ before the property name, so the other devs could understand it
