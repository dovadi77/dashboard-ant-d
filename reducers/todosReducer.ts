export type InitState = {
  todos: any[];
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
};

export const initState = {
  todos: [],
  totalNum: 0,
  totalCompletedNum: 0,
  totalUncompletedNum: 0,
  percentCompleted: 0,
} as InitState;

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return calculateTodos(state, sortTodos([...state.todos, action.value]));
    case "edit":
      return calculateTodos(
        state,
        sortTodos(replaceItemAtIndex(state.todos, action.index, action.value))
      );
    case "delete":
      return calculateTodos(
        state,
        removeItemAtIndex(state.todos, action.index)
      );

    default:
      return calculateTodos(state, sortTodos(state.todos));
  }
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

function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function calculateTodos(_oldState: any, todos: any) {
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
}
