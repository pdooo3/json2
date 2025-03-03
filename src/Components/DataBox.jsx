import React, { useState } from "react";
import "../CSS/DataBox.css";
import DeleteItem from "./Delete";
import PicBox from "./PicBox";
import EditData from "./EditData";
const DataBox = ({ id, Name, render, Admin }) => {
  const [isDelete, setIsDelete] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  return (
    <>
      <div className="box">
        <p> {Name}</p>
        <div className="picHandel">
          <PicBox />
        </div>
        <button
          className="DellB"
          onClick={() => {
            confirm(`Are You Shure Delete ${Name}?`) && setIsDelete(id);
          }}
        >
          DELETE
        </button>
        <button
          className="EditB"
          onClick={() => {
            showEdit ? setShowEdit(!showEdit) : setShowEdit(!showEdit);
          }}
        >
          EDIT
        </button>
      </div>
      {isDelete && <DeleteItem id={isDelete} render={render} />}
      {showEdit && (
        <EditData
          Name={Name}
          setShowEdit={setShowEdit}
          id={id}
          render={render}
        />
      )}
    </>
  );
};
export default DataBox;
