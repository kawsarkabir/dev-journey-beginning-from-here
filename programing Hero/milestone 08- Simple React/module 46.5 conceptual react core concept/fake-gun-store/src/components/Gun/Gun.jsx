import React from "react";

const Gun = (props) => {
  const { gun, increase } = props;
  const { action, bullet, category, img, name, price } = gun;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <div>
            <div className="badge badge-outline">{action}</div>
              <div className="badge badge-outline">{bullet}</div>
              <div className="badge badge-outline">{price}</div>
            </div>
            <div className="mt-5">
              <button onClick={()=>increase()} className="btn btn-sm btn-danger mr-4">
                Add to Cart
              </button>
              <button className="btn btn-sm btn-success">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
