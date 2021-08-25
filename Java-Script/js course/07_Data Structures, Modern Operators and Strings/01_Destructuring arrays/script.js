`use strict`;
//few basic examples of array destructuring

// const [day1, day2, , , day5] = weekdays;
// console.log(day1, day2, day5);

// const months = [`jan`, `feb`, `march`, `dec`];

// let [lastMonth, , , firstMonth] = months;
// [firstMonth, lastMonth] = [lastMonth, firstMonth];
// console.log(lastMonth, firstMonth);

//advanced use cases for array destructuring
// const weekdays = [`sun`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`];

// const openingHours = {
//   [weekdays[1]]: {
//     open: 07,
//     close: 20,
//   },
//   [weekdays[3]]: {
//     open: 08,
//     close: 21,
//   },
//   [weekdays[6]]: {
//     open: 7.3,
//     close: 18,
//   },
// };

// const musicStore = {
//   name: `cy-lax Inc.`,
//   location: `kyoto, tokyo`,
//   categories: [`electric`, `bass`, `acoustic`, `ukulele`],
//   mains: [`guitar`, `keyboard`],

//   order(starterIndex, mainIndex) {
//     return this.categories[starterIndex], this.mains[mainIndex];
//   },

//   orderDelievery(starterIndex = 2, mainIndex = 0, time = 15, address) {
//     return `order recieved! Yor ${this.categories[starterIndex]} ${this.mains[mainIndex]} will be delieverd at ${time} to ${address}`;
//   },
// };
// console.log(musicStore.orderDelievery());
