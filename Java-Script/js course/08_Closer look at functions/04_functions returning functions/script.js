const greet = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};

greet(`Hello, welcome`)(`CyLax`);
// or
const greeter = greet(`Welcome here, `);
greeter(`CyLax`);

// using arrow functions

const greet1 = (msg) => (name) => console.log(`${msg} ${name}`);
greet1(`Hey`)(`CyLax`);
