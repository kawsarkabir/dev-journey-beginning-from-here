import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Shop = ({Increase}) => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }, [])
  return (
    <div className="shop-container">
      <div className="product-container grid grid-cols-3 gap-10 my-20 justify-items-center">
         {
          products.map(product=><Card product={product} Increase={Increase} key={product.id}/>)
         }
      </div>
      <div className="cart-container">
        <h4>order summary</h4>
      </div>
    </div>
  );
};

export default Shop;
