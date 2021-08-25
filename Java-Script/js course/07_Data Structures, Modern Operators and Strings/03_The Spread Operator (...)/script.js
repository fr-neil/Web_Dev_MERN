`use strict`;
// few basic examples of spread operator

const months = [`jan`, `feb`, `march`, `dec`];

const newMonths = [...months, `jully`, `jun`, `sep`];
console.log(...newMonths);
let name = `Cy-Lax`;
console.log(...name, ``, `a`);

// advanced use cases for object destructuring
// const musicStore = {
//   name: `cy-lax Inc.`,
//   location: `kyoto, tokyo`,
//   categories: [`electric`, `bass`, `acoustic`, `ukulele`],
//   mains: [`guitar`, `keyboard`],

//   openingHours: {
//     sun: {
//       open: 07,
//       close: 20,
//     },
//     wed: {
//       open: 08,
//       close: 21,
//     },
//     sat: {
//       open: 7.3,
//       close: 18,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return this.categories[starterIndex], this.mains[mainIndex];
//   },

//   orderDelievery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `order recieved! Yor ${this.categories[starterIndex]} ${this.mains[mainIndex]} will be delieverd at ${time} to ${address}`
//     );
//   },
// };

// musicStore.orderDelievery({
//   starterIndex: 2,
//   mainIndex: 0,
//   time: 15,
//   address: `nashik`,
// });
