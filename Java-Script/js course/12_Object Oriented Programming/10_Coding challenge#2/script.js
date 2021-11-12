// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   return this.speed + 10;
// };
// car.prototype.break = function () {
//   return this.speed - 5;
// };
// const BMW = new car(`lol`, 120);
// console.log(BMW.accelerate());

// const Mercedes = new car(`lol`, 95);
// console.log(Mercedes.break());

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  break() {
    return this.speed - 5;
  }
  accelerate() {
    return this.speed + 10;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new carCl(`Ford`, 120);
console.log(car1.break());
console.log(car1.accelerate());
console.log(car1.speedUs);
