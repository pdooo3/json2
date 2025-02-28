import { useEffect, useState } from "react";
import "boxicons";

const SideBar = () => {
  const [toggle, setToggle] = useState(null);
  return (
    <>
      <button
        className="oc"
        onClick={() => {
          toggle
            ? ((document.querySelector(".sidebar").style.visibility = "hidden"),
              setToggle(!toggle))
            : ((document.querySelector(".sidebar").style.visibility =
                "visible"),
              setToggle(!toggle));
        }}
      >
        <box-icon name="menu"></box-icon>
      </button>
      <div className="sidebar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};
export default SideBar;
