import "./App.css";

function App() {
  const nayoks = ['Rubel', 'Baaparaz', 'kabir', 'shallu', 'kawsar', 'k2']
  return (
    <div className="App">
      {
        nayoks.map(nayok =><li>Name:{nayok}</li>)
      }
      {
        nayoks.map(nayok => <MyFunc name ={nayok} />)
      }
      <Friend name="Anamul" naika ="nupa" />
      <Friend name = "Mubarok" naika ="nadia" />
    </div>
  );
}

function MyFunc(props) {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <p>Profession: {props.profetion}</p>
    </div>
  );
}

function Friend(props) {
  const {name, naika} = props
  return (
    <div className="container">
      <h1>{name}</h1>
      <h3>Naika: {naika}</h3>
    </div>
  );
}

export default App;
