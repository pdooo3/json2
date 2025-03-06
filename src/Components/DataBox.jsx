import React, { useState } from "react";
import "../CSS/DataBox.css";
import DeleteItem from "./Delete";
import PicBox from "./PicBox";
import EditData from "./EditData";
const DataBox = ({ City, Age, id, Name, render, Admin }) => {
  const [isDelete, setIsDelete] = useState(null);
  const [showEdit, setShowEdit] = useState(null);
  return (
    <>
      <div className="box">
        <div className="buttonDE">
          <button
            className="EditB"
            onClick={() => {
              showEdit ? setShowEdit(!showEdit) : setShowEdit(!showEdit);
            }}
          >
            <box-icon name="edit"></box-icon>
          </button>
          <button
            className="DellB"
            onClick={() => {
              confirm(`Are You Shure Delete ${Name}?`) && setIsDelete(id);
            }}
          >
            <box-icon name="x"></box-icon>
          </button>
        </div>
        <div className="picHandel">
          <PicBox />
        </div>
        <p>Name: {Name}</p>
        <p>Age: {Age}</p>
        <p>City: {City}</p>
      </div>
      {isDelete && <DeleteItem id={isDelete} render={render} />}
      {showEdit && (
        <EditData
          Name={Name}
          Age={Age}
          City={City}
          setShowEdit={setShowEdit}
          id={id}
          render={render}
        />
      )}
    </>
  );
};
export default DataBox;
