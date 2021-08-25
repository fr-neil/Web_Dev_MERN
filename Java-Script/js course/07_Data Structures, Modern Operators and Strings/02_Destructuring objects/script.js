`use strict`;
// few basic examples of object destructuring

// const months = {
//   jan: 1,
//   feb: 2,
//   march: 3,
//   dec: 4,
// };
// const { jan, dec } = months;
// const { jan: firstMonth, dec: lastMonth } = months;
// console.log(lastMonth, firstMonth);

//default values
// const { menu = [], location: address = [] } = musicStore;
// console.log(menu, address);

//mutating variables
// let a = 10;
// let b = 46;
// let c = 9;
// console.log(a, b, c);
// const obj = {
//   a: 23,
//   b: 43,
//   c: 53,
// };
// ({ a, b, c } = obj);
// console.log(a, b, c);

// advanced use cases for object destructuring
const musicStore = {
  name: `cy-lax Inc.`,
  location: `kyoto, tokyo`,
  categories: [`electric`, `bass`, `acoustic`, `ukulele`],
  mains: [`guitar`, `keyboard`],

  openingHours: {
    sun: {
      open: 07,
      close: 20,
    },
    wed: {
      open: 08,
      close: 21,
    },
    sat: {
      open: 7.3,
      close: 18,
    },
  },

  order: function (starterIndex, mainIndex) {
    return this.categories[starterIndex], this.mains[mainIndex];
  },

  orderDelievery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieved! Yor ${this.categories[starterIndex]} ${this.mains[mainIndex]} will be delieverd at ${time} to ${address}`
    );
  },
};

musicStore.orderDelievery({
  starterIndex: 2,
  mainIndex: 0,
  time: 15,
  address: `nashik`,
});
