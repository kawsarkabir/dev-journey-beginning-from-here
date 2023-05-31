import React, { useEffect, useState } from "react";
import "./Todos.css";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  //dicide how to show data in pagination
  const itemPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  let start = (currentPage - 1) * itemPerPage;
  let end = start + itemPerPage;

  const displayTodo = todos.slice(start, end);

  const prevPage = () => {
    if (start > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const nexPage = () => {
    if (end < todos.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="all-todo-box">
      {displayTodo.map((todo) => (
        <TodoCard key={todo.id} data={todo} />
      ))}
      <button onClick={() => prevPage()}>prev</button>
      <button onClick={() => nexPage()}>next</button>
    </div>
  );
};

export default Todos;
