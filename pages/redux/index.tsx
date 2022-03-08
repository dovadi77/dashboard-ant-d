import React from "react";
import { connect } from "react-redux";
import {
  addTodos,
  readTodos,
  updateTodos,
  deleteTodos,
} from "../../redux/actions/todosAction";
import { TodoItemCreate } from "../../components/TodoItemCreate";
import { TodoItem } from "../../components/TodoItem";
import { TodosStats } from "../../components/TodosStats";
import styles from "../../styles/Home.module.css";
import Head from "../../components/Head";
import { statTodos } from "../../redux/store";

function Todos(props: any) {
  const todoList = props.todos;

  return (
    <div className={styles.container}>
      <TodosStats state={statTodos(todoList)} />
      <TodoItemCreate add={props.add} />
      <Head />
      {todoList.map((todoItem: any, index: number) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
          edit={props.update}
          index={index}
          del={props.delete}
        />
      ))}
    </div>
  );
}
// Todos.getInitialProps = ({ store }) => {};

const mapStateToProps = (state: any) => ({
  todos: state.todos.value,
});

const mapDispatchToProps = {
  add: addTodos,
  read: readTodos,
  update: updateTodos,
  delete: deleteTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
