import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, todo.text)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
