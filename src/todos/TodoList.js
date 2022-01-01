import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { compelteTodo, removeTodo } from "./actions";
import { displayAlert } from "./thunks";
import "./TodoList.css";

const ToDoList = ({ todos = [], onRemovePressed, onMarkAsCompleteKeyPressed, onDisplayAlertClicked }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed}  onMarkAsCompleteKeyPressed={onDisplayAlertClicked}/>
    ))}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed:text=> dispatch(removeTodo(text)),
  onMarkAsCompleteKeyPressed: text => dispatch(compelteTodo(text)),
  onDisplayAlertClicked: (text)=> dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
