import "./App.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoList from "../components/Todo/TodoList";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <Sidebar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoList />
        </main>
      </div>
    </div>
  );
}

export default App;
