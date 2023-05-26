import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Gun = (props) => {
  const [modalData, setModalData] = useState({});
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
              <button
                onClick={() => increase()}
                className="btn btn-sm btn-danger mr-4"
              >
                Add to Cart
              </button>
              <label onClick={()=>setModalData(gun)} htmlFor="my-modal-6" className="btn btn-sm btn-success">
                Details
              </label>
              {modalData && <Modal data={modalData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
