import React from "react";

const Card = ({ product, handleAddToCart }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h4 className="card-title">{name}!</h4>
          <p className="text-lg">
            Price: ${price}
          </p>
          <p className="text-lg">
            Manufacturer: {seller}
          </p>
          <p className=" text-lg">Ratting: {ratings} start</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
