import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: 290 },
    { name: "phone", price: 350 },
    { name: "tablet", price: 450 },
    { name: "laptop", price: 290 },
    { name: "phone", price: 350 },
    { name: "tablet", price: 450 },
  ];

  return (
    <div className="App">
      {products.map((product) => (
        <Products name={product.name} price={product.price} />
      ))}
    </div>
  );
}

function Products(props) {
  return (
    <div className="product-container">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  );
}

export default App;
