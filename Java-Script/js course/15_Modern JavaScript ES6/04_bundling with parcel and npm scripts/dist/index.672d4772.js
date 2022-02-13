const shoppingCart2 = function(product1, quantity1) {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 260;
    const totalQuantity = 10;
    const addCart = (product, quantity)=>{
        cart.push({
            product,
            quantity
        });
        console.log(`Added ${quantity} ${product} to cart`);
    };
    const orderSummary = function(product, quantity) {
        console.log(`Ordered ${quantity} ${product} from supplier`);
    };
    return {
        addCart,
        orderSummary,
        totalPrice,
        totalQuantity
    };
}();
shoppingCart2.addCart(`apple`, 2);
shoppingCart2.orderSummary(`orange`, 2);
// this all works because of closure
if (module.hot) module.hot.accept();
 // this is for hot reloading, it'll prevent current browser state from being lost when you reload the page

//# sourceMappingURL=index.672d4772.js.map
