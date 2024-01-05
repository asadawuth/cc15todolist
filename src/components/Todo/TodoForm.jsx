import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";
import { useState } from "react";
/*
 props = {
  textSubmit : string
  setIsOpenForm : Fn
 }
*/

function TodoForm(props) {
  const [isError, setisError] = useState(false);
  const [taskInput, setTask] = useState("");
  const handleChangeInput = (event) => {
    if (isError) setisError(false);
    setTask(event.target.value);
  };
  const handleSubmit = function (event) {
    event.preventDefault();
    /* Start Logic : For CreateToDo*/
    // 1 sub ได้ 2 ไม่ได้  // FormValidation
    // 2 รู้ก่อนว่า user พิมอะไร (อยู่ใน state : taskInput)
    // 3 formValidation summit === create new Todo
    // 3.1 ส่ง Request ไปหลังบ้าน Save ลง Database
    // 3.2 ทำการอัพเดท State ของ AllTodo === React ทำการ Rerander
    // React ไม่อนุญาติให้ Childen สื่อสารกันเอง
    if (taskInput.trim() === "") {
      setisError(true);
      return;
    }
    props.addTodo(taskInput);
    props.setIsOpenForm(false);
    //console.log("summit === create new Todo");
    // create NewTodo
    // 1. ส่ง Request ไปหลังบ้านเพื่อ save ลง Database
    // 2. ทำการอัพเดท State ของ AllTodo == React ทำการ Rerender
    // data = []
    // data = [{id:num,tasj:string,status:boolen,due-date:d/m/y}]
    // oldState = [{0},{0},{0}}]
    // newState = [{n},{0},{0},{0}}]
    /*
    const newTodo = {
      id: nanoid(),
      task: taskInput,
      status: false,
      due_date: "2023-01-09",
    };
    */
    //const newTodoLists = [newTodo, ...props.data];
    /*End*/
    //props.setTodo(newTodoLists);
    //props.setIsOpenForm(false);
    //props.setTodo((prev) => [newTodo, ...prev]);
    //send taskInput to addTodo

    // const [taskInput, setTask] = useState(""); บรรทัดล่าง
  };
  const handleCancel = () => {
    //setIsOpenForm(false)
    //correctName : setIsOpenForm(false)
    props.setIsOpenForm(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder=""
        onChange={handleChangeInput}
        value={taskInput}
      />
      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

// 1. <TodoCreate setTodo={setAllTodos} data={allTodos} /> import TodoCreate from "../components/Todo/TodoCreate";
// 2. setTodo={props.setTodo}  //  import TodoForm from "./TodoForm";
// 3. import { nanoid } from "nanoid"; // const newTodoLists = [newTodo, ...props.data]; // props.setTodo(newTodoLists);
