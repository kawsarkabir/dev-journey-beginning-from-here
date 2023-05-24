import { useEffect, useState } from "react";
import "./App.css";
 

function App() {
  return (
    <div className="App">
      <ExternalUsers />
    </div>
  );
}

/* function Counter() {
  const [count, setCount] = useState(0);
  const IncreaseCount =() => setCount(count+1);
  const decreaseCount =() => setCount(count-1);
  return(
    <div className="counter-container">
    <h1>Count:{count}</h1>
    <button onClick={IncreaseCount} >Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>
  )
} */

// Daynamic data load
function ExternalUsers(){
  //step 1: useState 
  const [users, setUsers] = useState([])
  // step 2: useEfect 
   useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
   }, []);
    return(
      <div>
        {
          users.map(user=><User name ={user.name} email = {user.email} />)
        }
      </div>
    )
}

function User(props){
  return(
    <div className="user-container">
     <h3>Name: {props.name}</h3>
  <p>Email: {props.email}</p>
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
