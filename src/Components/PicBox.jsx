import { useState } from "react";
import logo from "../pic/1.jpg";
import logo1 from "../pic/2.jpg";
import logo2 from "../pic/3.jpg";
import "../CSS/PicBox.css";
import "boxicons";
const PicBox = () => {
  const [pic, setPic] = useState([logo, logo1, logo2]);
  const [correntPic, setCorrentPic] = useState(
    Math.floor(Math.random() * pic.length)
  );
  return (
    <>
      <div className="picBox">
        <img src={pic[correntPic]}></img>

        <div className="picB">
          {pic.map((_, index) => (
            <button
              key={index}
              className={correntPic === index ? "active" : "notAvtive"}
              onClick={() => setCorrentPic(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};
export default PicBox;
