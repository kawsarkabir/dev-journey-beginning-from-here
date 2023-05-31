import React from "react";

const TodoCard = ({ data }) => {
  return (
    <div className="todoCard">
      <h3>{data.todo}</h3>
      <div >
        <button className="btn">Complete </button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
