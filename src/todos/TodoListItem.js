import React from "react";
import "./TodoListItem.css";

const ToDoListItem = ({ todo, onRemovePressed, onMarkAsCompleteKeyPressed}) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
    {todo.isCompleted ? null :
      <button 
      onClick={()=>
      {onMarkAsCompleteKeyPressed(todo.text)}
      }
      className="completed-button">Mark as complete</button>}
      <button 
        onClick = {()=>{
          onRemovePressed(todo.text)
        }}
        className="remove-button">
        Remove
        </button>
    </div>
  </div>
);

export default ToDoListItem;
