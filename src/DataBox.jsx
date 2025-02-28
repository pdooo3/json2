import React, { useState } from "react";
import DeleteItem from "./Delete";
import logo from "./pic/images.jpg";
const Show = ({ id, Name, render }) => {
  const [isDelete, setIsDelete] = useState(null);
  return (
    <>
      <div className="box">
        <p> {Name}</p>
        <img src={logo}></img>
        <button
          className="DellB"
          onClick={() => {
            confirm(`Are You Shure Delete ${Name}?`) && setIsDelete(id);
          }}
        >
          DELETE
        </button>
      </div>
      {isDelete && <DeleteItem id={isDelete} render={render} />}
    </>
  );
};
export default Show;
