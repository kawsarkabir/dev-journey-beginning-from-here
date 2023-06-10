import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <div className="card-body">
        <h2 className="card-title"> Items: {cart.length}</h2>
        <h2 className="card-title">Total Price: $00</h2>
        <h2 className="card-title">Total Shipping: $00</h2>
        <h2 className="card-title">Tax: $00</h2>
        <h2 className="card-title">Grand Total: $00</h2>
      </div>
    </div>
  );
};

export default Cart;
