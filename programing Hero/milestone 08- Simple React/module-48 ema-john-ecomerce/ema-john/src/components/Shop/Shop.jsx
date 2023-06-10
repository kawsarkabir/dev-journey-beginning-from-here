import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

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

  useEffect(()=>{
    const storedCart = getShoppingCart()
    const saveCart = [];
    for(const id in storedCart){
      const addedProduct = products.find(product =>product.id === id)
      if(addedProduct){
        const qunantity = storedCart[id]
        addedProduct.quantity = qunantity
        saveCart.push(addedProduct)
      }
    }
    setCart(saveCart)
  },[products])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id)
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
