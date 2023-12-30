import React from "react";
import styles from "./TodoList.module.scss";
import { FaTrashAlt, FaPen, FaRegCircle } from "react-icons/fa";

function TodoList() {
  return (
    <ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}>
          <FaRegCircle />
        </span>
        <p className={styles.todo__task}>TodoItem 1 </p>
        <span className={styles.todo__date}>30 AUG</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaTrashAlt />
          </span>
          <span className={styles.todo__delete}>
            <FaPen />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
