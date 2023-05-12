function Card(props) {
const { todoTitle, todoDesc} = props;
  return (
    <div className="customCSS">
      <div>
      <h3>{todoTitle}</h3>
      <p>{todoDesc}</p>
      </div>
    </div>
  );
}
export default Card;
