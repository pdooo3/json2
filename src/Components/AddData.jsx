import "../CSS/AddData.css";
import SideBar from "./SideBar";
import Header from "./Header";
import axios from "axios";
const Add = () => {
  async function AddToDataBase(formData) {
    await axios
      .post(`https://testapitome.freehost.io?key=maryam`, {
        name: formData.get("Name"),
        age: formData.get("Age"),
        city: formData.get("City"),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Header />
      <SideBar />
      <div className="formToAddData">
        <form className="DataForm" action={AddToDataBase}>
          <label htmlFor="">
            Name
            <input className="Addinput" name="Name" type="text" required />
          </label>
          <label htmlFor="">
            Age
            <input className="Addinput" name="Age" type="number" required />
          </label>
          <label htmlFor="">
            City
            <input className="Addinput" name="City" type="text" required />
          </label>
          <button className="AddB" type="submit">
            ADD
          </button>
        </form>
      </div>
    </>
  );
};
export default Add;
