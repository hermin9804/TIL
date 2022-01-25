import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todotext: string) => {
    const newTodo = new Todo(todotext);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
