import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./reducers/counterReducer";
import todosReducer from "./reducers/todosReducer";

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      todos: todosReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export const statTodos = (todos: any[]) => {
  const todoList = [...todos];
  const totalNum = todoList.length;
  const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
  const totalUncompletedNum = totalNum - totalCompletedNum;
  const percentCompleted =
    totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

  return {
    todos,
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  };
};
