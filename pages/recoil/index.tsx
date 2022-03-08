import { useRecoilValue } from "recoil";
import { TodoItemCreate } from "../../components/TodoItemCreate";
import { TodoItem } from "../../components/TodoItem";
import { TodosStats } from "../../components/TodosStats";
import { sortedTodosState } from "../../recoil/data";
import styles from "../../styles/Home.module.css";
import Head from "../../components/Head";

const Todos = () => {
  const todoList = useRecoilValue(sortedTodosState);

  return (
    <div className={styles.container}>
      <Head />
      <TodosStats />
      <TodoItemCreate />

      {todoList.map((todoItem, index) => (
        <TodoItem key={todoItem.id} item={todoItem} index={index} />
      ))}
    </div>
  );
};

export default Todos;
