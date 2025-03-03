import GET from "./Get";
import Header from "./Header";
import SideBar from "./SideBar";
import "../CSS/Main.css";
const Admin = () => {
  return (
    <>
      <Header />
      <SideBar />
      <GET Admin={true} />
    </>
  );
};
export default Admin;
