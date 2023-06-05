import React, { useEffect, useState } from "react";
import SingleCosmetic from "../SingleCosmetic/SingleCosmetic";

const Cosmetic = () => {
    const [cosmetic, setCosmetic] = useState([])
    useEffect(()=>{
        fetch('data.json')
    },[])
    .then(res=>res.json())
    .then(data=> console.log(data))
 
  return (
    <div>
      {/* <h1>Cosmethic Items</h1>
      {cosmetics.map((cosmetic) => (
        <SingleCosmetic cosmetic={cosmetic} key={cosmetic.id} />
      ))} */}
    </div>
  );
};

export default Cosmetic;
