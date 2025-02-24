import React, { useState } from "react";
import DeleteItem from "./Delete";
const Show = ({ id, Name, render }) => {
  const [isDelete, setIsDelete] = useState(null);
  return (
    <>
      <div className="box">
        <h1> {Name}</h1>
        <button id={id} onClick={(e) => {setIsDelete(id);}}>DELETE</button>
      </div>
      {isDelete ? <DeleteItem id={isDelete} render={render} /> : ""}
    </>
  );
};
export default Show;
