import { useState } from "react";
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
        <a>Add</a>
        <a>About</a>
      </div>
    </>
  );
};
export default SideBar;
