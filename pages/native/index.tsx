import { useReducer } from "react";
import { TodoItemCreate } from "../../components/TodoItemCreate";
import { TodoItem } from "../../components/TodoItem";
import { TodosStats } from "../../components/TodosStats";
import styles from "../../styles/Home.module.css";
import { initState, reducer } from "../../reducers/todosReducer";
import { Todos as TodosItem } from "../../constants";
import Head from "../../components/Head";

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className={styles.container}>
      <TodosStats state={state} />
      <TodoItemCreate
        add={(value: any) => dispatch({ type: "add", value: value })}
      />
      <Head />
      {state.todos.map((todoItem: TodosItem, index: number) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
          index={index}
          edit={(index: number, value: any) =>
            dispatch({ type: "edit", index: index, value: value })
          }
          del={(index: number) => dispatch({ type: "delete", index: index })}
        />
      ))}
    </div>
  );
};

export default Todos;
