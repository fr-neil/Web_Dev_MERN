//closure - closure enables to use variable enviroment even after it's scope ended
// a simple example

//exapmle-1
`use strict`;
const fixedBook = function () {
  let cCount = 0;
  return function () {
    cCount++;
    console.log(`${cCount} passengers`);
  };
};
const incriment = fixedBook();
incriment();
incriment();
incriment();

//example-2
//reassigning variable using closure

let final;

const a = function () {
  const x = 20;
  final = function () {
    console.log(`assigning variable : ${x * 3}`);
  };
};

const b = function () {
  const y = 49;
  final = function () {
    console.log(`Re-assiging variable : ${y / 7}`);
  };
};
a();
final();
b();
final();

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We will start boarding all ${n} passengers`);
    console.log(`There are 3 groups with each ${perGroup} passengers`);
  }, wait * 2000);

  console.log(`We will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
