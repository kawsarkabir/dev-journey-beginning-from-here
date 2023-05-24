import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(23);
  const IncreaseCount =() => setCount(count+1);
  const decreaseCount =() => setCount(count-1);
  return(
    <div className="counter-container">
    <h1>Count:{count}</h1>
    <button onClick={IncreaseCount} >Increase:{setCount}</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>
  )
}

export default App;

/* 

  const products = [
    { name: "laptop", price: 290 },
    { name: "phone", price: 350 },
    { name: "tablet", price: 450 },
    { name: "laptop", price: 290 },
    { name: "phone", price: 350 },
    { name: "tablet", price: 450 },
  ];


 ===== react ar core concept here ==  
 
{products.map((product) => (
        <Products name={product.name} price={product.price} />
      ))}

  function Products(props) {
  return (
    <div className="product-container">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  );
}    
*/
