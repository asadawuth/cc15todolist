import { React, useState } from "react";
import styles from "./TodoItem.module.scss";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";

//function TodoItem(props) {
//  const { task, done, date } = props;
function TodoItem({ id, task, done, date, deleteTodo, editTodo }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  //console.log(id);
  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () => {
    const newTodoObj = { id, task, date, status: !done };
    editTodo(id, { status: !done });
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Edit Task"
          setIsOpenForm={setIsOpenForm}
          editTodo={editTodo}
          oldTodo={{ id, task, done, date }}
        />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox} ${
              done ? styles.todo__checkbox__done : ""
            }`}
          >
            <HiOutlineCheck
              className={styles.todo__checkbox__icon}
              onClick={toggleStatus}
            />
          </div>
          <p
            className={`${styles.todo__task} ${done ? styles.todo__done : ""}`}
          >
            {task}{" "}
          </p>
          <span className={styles.todo__date}>{date}</span>
          <div className={styles.todo__action}>
            <span onClick={handleClick}>
              <FaPen className={styles.todo__edit} />
            </span>
            <span onClick={() => deleteTodo(id)}>
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>
      )}
    </>
  );
}
export default TodoItem;
