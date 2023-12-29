import "./App.scss";
import { React } from "react";
import { FaCar, FaChevronDown } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="todo__sidebar">
      <div className="flex">
        <div className="logo">
          <FaCar />
        </div>
        <h2 className="font">Inbox</h2>
      </div>
      <div className="flex">
        <div className="logo">
          <MdOutlineDateRange />
        </div>
        <h2 className="font">Today</h2>
      </div>
      <div className="flex">
        <div className="logo">
          <FaCalendarDays />
        </div>
        <h2 className="font">Next 7 days</h2>
      </div>
      <div>
        <div className="flex2">
          <div className="logodown">
            <FaChevronDown />
          </div>
          <h1>Project</h1>
        </div>
        <div className="flex">
          <div className="logo">
            <FaCar />
          </div>
          <h2 className="font">Work</h2>
        </div>
        <div className="flex">
          <div className="logo">
            <FaCar />
          </div>
          <h2 className="font">Home</h2>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
