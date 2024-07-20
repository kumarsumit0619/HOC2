import React, { useEffect, useState } from "react";
import HOC from "./HOC.jsx";

const TodoList = ({ data }) => {
  let renderTodos = data.map((item, index) => (
    <li key={index}>{item.title}</li>
  ));

  return (
    <div>
      <ul className="list">{renderTodos}</ul>
    </div>
  );
};

export default HOC(TodoList, "todos");
