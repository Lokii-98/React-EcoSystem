import { loadTodosFailure, loadTodosInProgress, loadTodoSuccess } from "./actions";

export const displayAlert =(text) => ()=>{
    alert(text);
};

export const loadTodos = ()=> async (dispatch,getState)=>{
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('http:localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodoSuccess(todos));
    }catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
    
}