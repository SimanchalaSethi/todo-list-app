import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { useSelector } from "react-redux";
export default function TodoList() {
   const todos = useSelector(state => state.todos.value
   );
    return (
        <div>
            <h1>My Todos</h1>
           <NewTodoForm />
            <h3>Completed:</h3>
            {todos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
            ))}
            <h3>Incomplete:</h3>
            {todos.map((todo, index) => (
                <TodoListItem todo={todo} key={index}/>
            ))}
        </div>
    );
}
