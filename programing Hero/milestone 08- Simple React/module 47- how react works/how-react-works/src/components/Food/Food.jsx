import React from "react";

const Food = ({ food }) => {
  const { title, description, price, discountPercentage, rating } = food;
  return (
    <>
    <h1>Welcome to Our New Brad Shop</h1>
      <div>
        <h2>Device Name: {title} </h2>
        <p>Description: {description}</p>
        <p>price: $ {price}</p>
        <p>Descount: {discountPercentage} %</p>
        <p>Review: {rating}</p>
      </div>
    </>
  );
};

export default Food;
