import { useState } from "react";
import { Routes, BrowserRouter, Route, Link, Outlet } from "react-router";
import "../CSS/SideBar.css";
import "boxicons";
const SideBar = () => {
  const [toggle, setToggle] = useState(null);
  return (
    <>
      <button
        className="oc"
        onClick={() => {
          toggle
            ? ((document.querySelector(".sidebar").style.width = "0vw"),
              setToggle(!toggle))
            : ((document.querySelector(".sidebar").style.width = "35vw"),
              setToggle(!toggle));
        }}
      >
        <box-icon name="menu"></box-icon>
      </button>
      <div className="sidebar">
        <Link to="/json2/add">add</Link>
        <a>About</a>
      </div>
    </>
  );
};
export default SideBar;
