import "./styles.css";
import TodoList from "./TodoList.jsx";
import UsersList from "./UsersList.jsx";
export default function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <div className="section">
        <UsersList />
        <TodoList />
      </div>
    </div>
  );
}
