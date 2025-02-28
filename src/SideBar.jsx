import { useState } from "react";
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
            : ((document.querySelector(".sidebar").style.width = "100vw"),
              setToggle(!toggle));
        }}
      >
        <box-icon name="menu"></box-icon>
      </button>
      <div className="sidebar">
        <a href="">Home</a>
        <a href="">News</a>
        <a href="">Contact</a>
        <a href="">About</a>
      </div>
    </>
  );
};
export default SideBar;
