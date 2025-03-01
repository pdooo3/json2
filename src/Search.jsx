import { useState } from "react";

const Search = () => {
  const [toggle, setToggle] = useState(null);

  return (
    <>
      <button
        className="search-button"
        onClick={() => {
          toggle ? setToggle(!toggle) : setToggle(!toggle);
        }}
      >
        <box-icon name="search" />
      </button>
      {toggle && <input placeholder="search somting" />}
    </>
  );
};
export default Search;
