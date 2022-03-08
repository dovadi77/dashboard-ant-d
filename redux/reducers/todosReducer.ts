import { AnyAction } from "redux";
import {
  ADD_TODOS,
  READ_TODOS,
  UPDATE_TODOS,
  DELETE_TODOS,
} from "../actions/todosAction";

export interface State {
  value: any[];
}

const todosReducer = (state: State = { value: [] }, action: AnyAction) => {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, value: sortTodos([...state.value, action.value]) };
    case UPDATE_TODOS:
      return {
        ...state,
        value: sortTodos(
          replaceItemAtIndex(state.value, action.index, action.value)
        ),
      };
    case DELETE_TODOS:
      return {
        ...state,
        value: sortTodos(removeItemAtIndex(state.value, action.index)),
      };
    default:
      return { ...state, value: sortTodos(state.value) };
  }
};

const replaceItemAtIndex = (arr: any[], index: number, newValue: {}) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: any[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const sortTodos = (todos: any[]) => {
  const todoList = [...todos];
  if (todos.length > 0) {
    return todoList.sort((a, b) =>
      a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
  }
  return todoList;
};

export default todosReducer;
