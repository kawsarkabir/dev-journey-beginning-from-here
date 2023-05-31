import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = () => {
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: 100,
      todo: data,
      completed: false,
    };
    console.log(obj);
  };

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setData(e.target.value)}
          type="text"
          placeholder="add your new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
