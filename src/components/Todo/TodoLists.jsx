import styles from "./TodoLists.module.scss";
import TodoItem from "./TodoItem";
import { useState } from "react";

/*
SCHHEMA
todoObj : <{id:num,task:string,status:boolean,due)date:string}
data = Array[] <{id:num,task:string,status:boolean,due)date:string}
dataRender = Array[] <TodoItem task=... done= ... date= .../>
*/
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

function TodoLists() {
  // CRUD = create Read Update Delete
  const [allTodos, setAllTodos] = useState(data);
  // 1. const dataRender = data.map((todoObj) => (
  //   <TodoItem
  //     key={todoObj.id}
  //     task={todoObj.task}
  //     done={todoObj.status}
  //     date={todoObj.due_date}
  //   />
  // ));
  //  return <ul className={styles.todo__lists}>{dataRender}</ul>;
  // 2.
  // return (
  //   <ul className={styles.todo__lists}>
  //     {data.map((todoObj) => (
  //       <TodoItem
  //         key={todoObj.id}
  //         task={todoObj.task}
  //         done={todoObj.status}
  //         date={todoObj.due_date}
  //       />
  //     ))}
  //   </ul>
  // );

  // 3.
  return (
    <ul className={styles.todo__lists}>
      {data.map(({ id, task, status, due_date }) => (
        <TodoItem key={id} task={task} done={status} date={due_date} />
      ))}
    </ul>
  );
}

export default TodoLists;
