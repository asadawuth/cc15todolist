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
  const [isError, setisError] = useState(true);
  const [task, setTask] = useState("");
  const handleChangeInput = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = function (event) {
    event.preventDefault();
    // 1 sub ได้ 2 ไม่ได้  // FormValidation
  };
  const handleCancel = () => {
    //setIsOpenForm(false)
    props.setIsOpenForm(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        onChange={handleChangeInput}
        value={task}
      />
      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? <p className={styles.todo__error}>Title is read</p> : null}
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
