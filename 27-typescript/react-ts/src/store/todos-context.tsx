import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (todoString: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (todoText: string) => {},
});

const TodosContextProvider: React.FC<{
  children: React.ReactNode | React.ReactNode[];
}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn React"),
    new Todo("Learn Typscript"),
  ]);

  function addTodo(enteredText: string) {
    setTodos((prevTodo: Todo[]) => {
      const newTodo = new Todo(enteredText);
      return prevTodo.concat(newTodo);
    });
  }

  function removeTodo(text: string) {
    setTodos((prevTodo: Todo[]) => {
      return prevTodo.filter((todo) => {
        return todo.text !== text;
      });
    });
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
