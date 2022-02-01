//exporting module
console.log(`exporting module`);

const shipCost = 10;
export const cart = [];

// export const addCart = (product, quantity) => {
//   cart.push({ product, quantity });
//   console.log(`Added ${quantity} ${product} to cart`);
// };

const totalPrice = 250;
const totalQuantity = 10;
export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Added ${quantity} ${product} to cart`);
}
