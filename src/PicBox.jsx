import { useState } from "react";
import logo from "./pic/1.jpg";
import logo1 from "./pic/2.jpg";
import logo2 from "./pic/3.jpg";
import "boxicons";
const PicBox = () => {
  const [pic, setPic] = useState([logo, logo1, logo2]);
  const [correntPic, setCorrentPic] = useState(0);
  return (
    <>
      <button
        className="lr"
        onClick={() => {
          setCorrentPic(correntPic - 1);
          if (correntPic <= 0) {
            setCorrentPic(pic.length - 1);
          }
        }}
      >
        <box-icon name="chevron-left"></box-icon>
      </button>
      <img src={pic[correntPic]}></img>
      <button
        className="lr"
        onClick={() => {
          setCorrentPic(correntPic + 1);
          if (correntPic > pic.length - 2) {
            setCorrentPic(0);
          }
        }}
      >
        <box-icon name="chevron-right"></box-icon>
      </button>
    </>
  );
};
export default PicBox;
