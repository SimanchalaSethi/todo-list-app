import "./App.css";
import TodoList from "./TodoList";

function App() {
  function createTodo(text) {
    setIncompletedTodos([...incompletedTodos, { text, isCompleted: false }]);
  }
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
