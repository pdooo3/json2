import { useEffect, useState } from "react";
import "../CSS/Header.css";
const Header = () => {
  const [toggleStyle, setToggleStyle] = useState(false);
  useEffect(() => {
    document.body.style.background = toggleStyle
      ? "rgb(44, 44, 44)"
      : " rgb(205, 205, 205)";
  }, [toggleStyle]);
  return (
    <>
      <header>
        <button
          onClick={() => {
            setToggleStyle(!toggleStyle);
          }}
          className="LOD"
        >
          <box-icon name={toggleStyle ? "moon" : "sun"} type="solid"></box-icon>
        </button>
      </header>
    </>
  );
};
export default Header;
