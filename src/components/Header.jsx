import { FaHome } from "react-icons/fa";
import React from "react";
import Search from "./Search";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <FaHome />
      </div>
      <div className="header__text">
        <h1>Todo List</h1>
      </div>
      <div className="header__search">
        <Search />
      </div>
    </header>
  );
}

export default Header;
