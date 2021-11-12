class account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }
  greet() {
    console.log(`Hello ${this.owner}`);
  }
  deposit(amount, pin) {
    if (pin === this.pin) {
      this.movements.push(`${this.currency} ${amount}`);
      console.log(`${this.currency} ${amount}₹`);
    }
  }
  withdrawl(amount, pin) {
    this.deposit(-amount, pin);
  }
}

const acc1 = new account("Neel", "INR", 1234);
acc1.greet();
acc1.deposit(1000, 1234);
acc1.withdrawl(500, 1234);
