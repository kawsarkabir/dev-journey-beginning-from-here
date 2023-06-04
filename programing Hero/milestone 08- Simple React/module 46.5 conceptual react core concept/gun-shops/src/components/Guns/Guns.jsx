import React, { useEffect, useState } from "react";
import Gun from "../Gun/Gun";

const Guns = ({Increase}) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center my-10">
        Welcome To My{" "}
        <span className="text-sky-300 font-semibold">Guns Shop</span>{" "}
      </h1>
      <div className="grid grid-cols-3 gap-10">{guns.map((gun) => <Gun gun ={gun} key={gun.id} Increase={Increase} />)}</div>
    </div>
  );
};

export default Guns;
