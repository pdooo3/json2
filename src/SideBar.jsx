import { useState } from "react";

import "boxicons";
import Search from "./Search";

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
            : ((document.querySelector(".sidebar").style.width = "20vw"),
              setToggle(!toggle));
        }}
      >
        <box-icon name="menu"></box-icon>
      </button>
      <div className="sidebar">
        <Search />
        <a href="">Add</a>
        <a href="">About</a>
      </div>
    </>
  );
};
export default SideBar;
