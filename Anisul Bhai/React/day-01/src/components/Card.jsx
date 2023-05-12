const date = new Date();

function Card(props) {
  return (
    <div className="card">
      <h3 className="title">{props.todoTitle}</h3>
      <p className="cardDesc">{props.todoDesc}</p>
    </div>
  );
}
export default Card;
