import {
  compelteTodo,
  CREATE_TODO,
  MARK_AS_COMPLETE,
  REMOVE_TODO,
} from "./actions";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    case MARK_AS_COMPLETE: {
      const { text } = payload;
      return state.map((todo) => {
        if (todo.text === text) return { ...todo, isCompleted: true };
      });
    }
    default:
      return state;
  }
};
