// sets //not imp as arrays // collection of unique values // can never have duplicate values

`use strict`;
const orderSet = new Set([`pasta`, `pizza`, `pizza`, `pasta`, `risotto`]);
console.log(orderSet);
console.log(orderSet.length); // won't work, cause sets have unique values as well as index and size doesn't matter for sets
console.log(new Set([`pasta`, `pizza`, `pizza`, `pasta`, `risotto`]).size);

// few common operations on sets

orderSet.add(`pani-puri`);

console.log(orderSet.has(`pizza`));
console.log(...new Set([`heyya`, `it's`, `tupac`, `yor`, `boy`, `here`]));

orderSet.delete(`risotto`);
console.log(orderSet);

// some use cases for sets

const staff = new Set([`waiter`, `manager`, `waiter`, `chef`, `waiter`]);
console.log(staff);
console.log(...staff);

const staffUnique = [new Set(staff)];
console.log(...staffUnique);

const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
