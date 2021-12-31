import React from "react";
import "./TodoListItem.css";

const ToDoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <div className="completed-button">Mark as complete</div>
      <div className="remove-button">Remove</div>
    </div>
  </div>
);

export default ToDoListItem;
