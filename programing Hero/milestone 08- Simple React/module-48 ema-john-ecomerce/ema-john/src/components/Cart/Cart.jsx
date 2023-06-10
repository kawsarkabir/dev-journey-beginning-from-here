import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping
  }
  const tax = parseFloat((totalPrice * 0.1).toFixed(2))
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart-container">
      <div className="card-body">
        <h4>Order summary</h4>
        <h2 className="card-title"> Items: {cart.length}</h2>
        <h2 className="card-title">Total Price: $ {totalPrice}</h2>
        <h2 className="card-title">Total Shipping: $ {totalShipping}</h2>
        <h2 className="card-title">Tax: $ {tax}</h2>
        <h2 className="card-title">Grand Total: $ {grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
