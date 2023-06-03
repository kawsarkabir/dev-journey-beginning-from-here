import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

const singer = { name: "Hero Alam", profassion: "singer" };
const actress = ["purnima", "totini", "sai", "samantha"];

const App = () => {
  const products = [
    { name: "Laptop", price: "75000" },
    { name: "computer", price: "40000" },
    { name: "headphone", price: "3800" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-600">Hello world!</h1>
      <h3>{singer.name}</h3>
      <p>{singer.profassion}</p>
      <Person name="Bappa Raz" profassion="heart-broken" />
      <Actress />
      {actress.map((actres) => (
        <Actress name={actres} />
      ))}
      {products.map((product) => (
        <Product product={product} />
      ))}
      <ExternalUsers/>
      <Counter/>
    </div>
  );
};

function Person(props) {
  return (
    <>
      <p className="text-3xl font-bold text-rose-600">Hello world!</p>
      <p> Nayok: {props.name} </p>
      <p>{props.profassion} </p>
    </>
  );
}

const Actress = (props) => {
  return (
    <>
      <p>{props.actres}</p>
    </>
  );
};

const Product = ({ product }) => {
  console.log(product.name);
  const { name, price } = product;
  return (
    <>
      <div className="border p-5 my-2">
        <h1 className="text-3xl font-bold text-emerald-600">Product Items!</h1>
        <h3>Name: {name} </h3>
        <p>Price: {price} </p>
      </div>
    </>
  );
};

const ExternalUsers=()=>{
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  }, [])
  return(
    <>
    <h1>Form External Users {users.length}</h1>
    {
      users.map(user=><Users user={user}/>)
    }
    </>
  )
}

const Users=({user})=>{
  // console.log(user.name);
  return(
    <div className="border my-1 p-1 bg-teal-300">
    <p>name: {user.name}</p>
    <p>Email: {user.email}</p>
    </div>
  )
}

export default App;
