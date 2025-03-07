import "../CSS/EditData.css";
import axios from "axios";
const EditData = ({ City, Age, Name, setShowEdit, id, render }) => {
  async function editData(formData) {
    if (
      formData.get("Name") !== Name ||
      formData.get("Age") !== Age ||
      formData.get("City") !== City
    ) {
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
    setShowEdit(false);
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
            Age
            <input name="Age" defaultValue={Age} className="Edit-Name" />
          </label>
          <label>
            City
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
