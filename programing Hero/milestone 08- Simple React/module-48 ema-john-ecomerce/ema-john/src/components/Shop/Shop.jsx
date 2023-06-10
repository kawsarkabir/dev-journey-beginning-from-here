import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [... cart, product]
    setCart(newCart)
  };
  return (
    <div className="shop-container">
      <div className="product-container grid grid-cols-3 gap-5 my-20 justify-items-center">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container mt-20 text-center font-semibold mr-16 shadow-2xl">
        <h4>Order summary</h4>
        <div className="card-body">
          <h2 className="card-title"> Items: {cart.length}</h2>
          <h2 className="card-title">Total Price: $00</h2>
          <h2 className="card-title">Total Shipping: $00</h2>
          <h2 className="card-title">Tax: $00</h2>
          <h2 className="card-title">Grand Total: $00</h2>
        </div>
      </div>
    </div>
  );
};

export default Shop;
