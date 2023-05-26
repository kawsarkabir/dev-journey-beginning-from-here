import React, { useEffect, useState } from "react";
import Gun from "../Gun/Gun";

const Guns = ({increase}) => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-4">
        Welcome to Guns Shop 
      </h1>
      <div className=" w-[80%] mx-auto grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-20 my-20">
      {guns.map((gun) => (
        <Gun gun={gun} increase = {increase} />
      ))}
      </div>
    </>
  );
};

export default Guns;
