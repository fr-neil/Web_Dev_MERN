// importing module
// import { addCart, totalPrice as price, tq } from "./shoppingCart.js";
// addCart("apple", 2);
// console.log(tq, price);

console.log(`importing module`);

// import * as cart from "./shoppingCart.js";
// cart.addCart(`apple`, 2);
// console.log(cart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add(`apple`, 2);
add(`orange`, 2);
add(`bread`, 2);
console.log(cart);
