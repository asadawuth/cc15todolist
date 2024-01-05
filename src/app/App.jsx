// Dependencies
import { useState } from "react";
import "./App.scss";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";

const data = [
  {
    id: 1,
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: 2,
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: 3,
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);
  const addTodo = (task) => {
    const newTodo = {
      id: nanoid(),
      task: task,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };
    setAllTodos((p) => [newTodo, ...p]);
  };
  const deleteTodo = (todoId) => {
    console.log(todoId);
    /* 1. 
    let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const newTodoList = [...allTodos];
      newTodoList.splice(foundedIndex, 1);
      setAllTodos(newTodoList);
    }
    */

    /* 2.
    const newTodoLists = allTodos.filter((todo) => todo.id !== todoId);
    setAllTodos(newTodoLists);
    */

    // 3.
    setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };
  /*
  const editTodo = (todoId, newTodoObj) => {
    //console.log(todoId, newTodoObj);
    let foundedTodo = allTodos.find((todo) => todo.id === todoId);
    //  let foundedTodo ไปหาของเดิมไปเป็นต้นฉบับก่อน
    if (!foundedTodo) return;
    const newTodo = Object.assign({}, foundedTodo, newTodoObj);
    // merige foundedTodo ของเดิท  newTodoObj ของใหม่

    let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    if (foundedIndex === -1) return;

    const newTodoLists = [...allTodos];
    newTodoLists.splice(foundedIndex, 1, newTodo);
    setAllTodos(newTodoLists);
  }; // Todoเก่าทิ้ง แล้ว SetList เข้ามาใหม่
  */

  // 2. ถ้าตรง else เอาของใหม่มาเขียนทับ
  /*
  const editTodo = (todoId, newTodoObj) => {
    const newTodoLists = allTodos.map(function (todo) {
      if (todo.id !== todoId) return todo;
      else return { ...todo, ...newTodoObj };
    });
    setAllTodos(newTodoLists);
  };
  */

  const editTodo = (todoId, updateTodoObj) => {
    const newTodoLists = allTodos.reduce((acc, todo) => {
      if (todo.id !== todoId) acc.push(todo);
      else acc.push({ ...todo, ...updateTodoObj });
      return acc;
    }, []);
    setAllTodos(newTodoLists);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          {/*  */}
          <TodoCreate addTodo={addTodo} />
          <TodoLists
            data={allTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
// <TodoLists data={allTodos} />  Render
// ส่ง Props เป็นค่าธรรมดา {} คือแชร์ค่า
// ส่ง Props เป็นค่า fn คือแชร์ Logic

//lirbary
// dayjs().format("YYYY-MM-DD") วันเดือนปี ปัจจุบัน import dayjs from "dayjs";
//import { nanoid } from "nanoid"; key id 1  key id 2 key id 3 key id 4
//React Icons AutoImport

//Detele
// 1.
/*
 const deleteTodo = function (todoId) {
    console.log(todoId);

    let foundedIndex = allTodos.findIndex((todo) => todo.id === todoId);
    if (foundedIndex !== -1) {
      const newTodoList = [...allTodos];
      newTodoList.splice(foundedIndex, 1);
      setAllTodos(newTodoList);
    }
  };

// 2. deleteTodo={props.deleteTodo} //  <TodoItem />
// 3. function TodoItem({ id, task, done, date, deleteTodo }) {
   onClick={() => deleteTodo(id)}
  */
