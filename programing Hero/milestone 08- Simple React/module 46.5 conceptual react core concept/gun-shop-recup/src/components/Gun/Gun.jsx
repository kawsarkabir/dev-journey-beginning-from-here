import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Gun = ({ gun, Increase }) => {
  const [modalData, setModalData] = useState({});
  const { name, img, price, category } = gun;
  return (
    <div>
      <div className="card w-96  mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions items-center mt-5">
            <button
              onClick={() => Increase()}
              className="btn btn-secondary btn-sm"
            >
              Buy Now
            </button>
            <label
              onClick={() => setModalData(gun)}
              htmlFor="my_modal_6"
              className="btn btn-sm btn-secondary"
            >
              details
            </label>
            {modalData && (
              <Modal modalData={modalData} setModalData={setModalData} />
            )}
            <div>
              <div className="badge badge-outline">$ {price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
