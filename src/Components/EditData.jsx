import "../CSS/EditData.css";
import axios from "axios";
const EditData = ({ City, Age, Name, setShowEdit, id, render }) => {
  async function editData(formData) {
    await axios
      .put(`https://testapitome.freehost.io?key=maryam`, {
        id: id,
        name: formData.get("Name"),
        age: formData.get("Age"),
        city: formData.get("City"),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setShowEdit(false);
    render();
  }
  return (
    <>
      <div id="EditBox" className="EditBox">
        <button
          className="Cancel"
          onClick={(e) => {
            setShowEdit(false);
          }}
        >
          <box-icon name="x"></box-icon>
        </button>
        <form action={editData}>
          <label>
            Name
            <input name="Name" defaultValue={Name} className="Edit-Name" />
          </label>
          <label>
            Name
            <input name="Age" defaultValue={Age} className="Edit-Name" />
          </label>
          <label>
            Name
            <input name="City" defaultValue={City} className="Edit-Name" />
          </label>
          <button className="SetEdit" type="submit">
            SET
          </button>
        </form>
      </div>
    </>
  );
};
export default EditData;
