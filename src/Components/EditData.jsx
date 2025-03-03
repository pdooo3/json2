import "../CSS/EditData.css";
import { useEffect, useState } from "react";
import axios from "axios";
const EditData = ({ Name, setShowEdit, id, render }) => {
  const [editName, setEditName] = useState("");

  async function editData(formData) {
    setEditName(formData.get("Name"));
    await axios
      .put(`https://testapitome.freehost.io?key=maryam`, {
        id: id,
        name: formData.get("Name"),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setShowEdit(false);
    render();
  }
  return (
    <>
      <div className="EditBox">
        <form action={editData}>
          <h1>{id}</h1>
          <label htmlFor="">
            Name
            <input name="Name" defaultValue={Name} className="Edit-Name" />
          </label>
          <button
            className="Cancel"
            onClick={() => {
              setShowEdit(false);
            }}
          >
            <box-icon name="x"></box-icon>
          </button>
          <button className="SetEdit" type="submit">
            set
          </button>
        </form>
      </div>
    </>
  );
};
export default EditData;
