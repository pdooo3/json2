import { useState } from "react";
import "../CSS/Header.css";
const Header = () => {
  const [toggleStyle, setToggleStyle] = useState(true);
  return (
    <>
      <header>
        <button
          onClick={() => {
            toggleStyle
              ? ((document.body.style.background = "black"),
                setToggleStyle(!toggleStyle))
              : ((document.body.style.background = "white"),
                setToggleStyle(!toggleStyle));
          }}
          className="LOD"
        >
          {toggleStyle ? (
            <box-icon name="moon" type="solid"></box-icon>
          ) : (
            <box-icon type="solid" name="sun"></box-icon>
          )}
        </button>
      </header>
    </>
  );
};
export default Header;
