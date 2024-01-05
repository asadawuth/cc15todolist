import styles from "./TodoCreate.module.scss";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import TodoForm from "./TodoForm";
import { useState } from "react";
//import { nanoid } from "nanoid";
/*
Condition Rendering
- Dedault : Show Button & Text
- Active : Show TodoForm

Concept : true  ? <AddTask> : <TodoForm>
onClick คลิกก่อนถึงจะรัน
*/

//ตัวTodoCreate Component  handleClick fn ธรรมดา
/*
function myUseState() {
  return [5,9]
}
let [a,b] = myUseState()
a === 5, b === 9
a current State fn สำหรับ SetState
*/
// Js เพียวๆ if else Render React ไม่ได้ ต้องใช้ state state เปลี่ยน fn component จะ เปลี่ยน
function TodoCreate(props) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = () => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Add Task"
          setIsOpenForm={setIsOpenForm}
          addTodo={props.addTodo}
        />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
