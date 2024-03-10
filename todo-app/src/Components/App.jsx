import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem from "./TODOItem";
function App() {
  return (
    <div>
      <center>
        <AppName></AppName>
        <AddTodo ></AddTodo>
        <TodoItem ></TodoItem>
      </center>
    </div>
  );
}

export default App;
