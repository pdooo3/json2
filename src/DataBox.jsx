import React, { useState } from "react";
import DeleteItem from "./Delete";
import PicBox from "./PicBox";

const DataBox = ({ id, Name, render, Admin }) => {
  const [isDelete, setIsDelete] = useState(null);
  return (
    <>
      <div className="box">
        <p> {Name}</p>
        <div className="picHandel">
          <PicBox />
        </div>
        {Admin && (
          <button
            className="DellB"
            onClick={() => {
              confirm(`Are You Shure Delete ${Name}?`) && setIsDelete(id);
            }}
          >
            DELETE
          </button>
        )}
      </div>
      {isDelete && <DeleteItem id={isDelete} render={render} />}
    </>
  );
};
export default DataBox;
