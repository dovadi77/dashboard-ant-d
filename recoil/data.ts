import * as crypto from "crypto";
import { atom, selectorFamily } from "recoil";
import { selector } from "recoil";
import { Item, PageView, Todos } from "../constants";

export const dataState = atom({
  key: "dataState",
  default: [
    {
      key: "1",
      id: 1,
      name: "Test",
      bank: "BANK ABC",
      owner: "Majiso Fun",
      type: "E-WALLET",
      items: ["aaaa", "bbbbb", "ccccc"],
    },
  ] as Item[],
});

export const todosState = atom<Todos[]>({
  key: `${Math.floor(Math.random() * 10000)}-TodosState`,
  default: [],
});

export const countState = atom({
  key: "countState",
  default: 0,
});

export const pageState = atom({
  key: "pageState",
  default: "/",
});

export const pageViewState = atom({
  key: "pageViewState",
  default: {
    page: "index",
    param: null,
  } as PageView,
});

export const dataLengthState = selector({
  key: "dataLengthState",
  get: ({ get }) => {
    const items = get(dataState);
    return items.length;
  },
});

export const specifiedDataState = selectorFamily({
  key: "specifiedDataState",
  get:
    (itemID) =>
    ({ get }) => {
      const data = get(dataState);
      let obj = data.find((o) => o.id === itemID);
      return obj;
    },
  set:
    (itemID: number) =>
    ({ set }, newValue: any) =>
      set(dataState, (prevState) => {
        let data = [...prevState];
        let index = data.findIndex((x) => x.id === itemID);
        data[index] = { ...data[index], ...newValue };
        return data;
      }),
});

export const sortedTodosState = selector({
  key: `sortedTodosState`,
  get: ({ get }) => {
    const todos = get(todosState);
    return sortTodos(todos);
  },
});

export const statTodosState = selector({
  key: `statTodosState`,
  get: ({ get }) => {
    const todoList = get(todosState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});

const sortTodos = (todos: any[]) => {
  const todoList = [...todos];
  if (todos.length > 0) {
    return todoList.sort((a, b) =>
      a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
    );
  }
  return todoList;
};
