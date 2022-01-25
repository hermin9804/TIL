import "./App.css";
import Todo from "./components/todo";
import Todos from "./components/Todos";

const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <Todos items={todos} />
    </div>
  );
}

export default App;
