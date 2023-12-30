import "../app/App.scss";
import "./Sidebar.scss";
import { React, useState } from "react";
import { FaCar, FaChevronDown } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";

function Sidebar() {
  const [list, setListist] = useState(true);
  const handle = () => setListist(!list);
  return (
    <>
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
          <div onClick={handle} className={list ? "logodown" : "logodown1"}>
            <FaChevronDown />
          </div>
          <h1>Project</h1>
        </div>

        {list && (
          <>
            <div className="flex">
              <div className="logo">
                <FaCar />
              </div>
              <h2 className="font">Project-A</h2>
            </div>
            <div className="flex">
              <div className="logo">
                <FaCar />
              </div>
              <h2 className="font">Project-B</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Sidebar;
