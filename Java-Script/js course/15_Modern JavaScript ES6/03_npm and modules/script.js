const shoppingCart2 = (function (product, quantity) {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 260;
  const totalQuantity = 10;

  const addCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`Added ${quantity} ${product} to cart`);
  };

  const orderSummary = function (product, quantity) {
    console.log(`Ordered ${quantity} ${product} from supplier`);
  };

  return {
    addCart,
    orderSummary,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addCart(`apple`, 2);
shoppingCart2.orderSummary(`orange`, 2);

// this all wors because of closure
