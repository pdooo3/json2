import { useEffect, useState } from "react";
import "../CSS/Search.css";
import "boxicons";
import DataBox from "./DataBox";
const Search = ({ data, loadPost, Admin }) => {
  const [searched, setSearched] = useState("");
  const [dataF, setDataF] = useState([]);
  useEffect(() => {
    if (searched === "") {
      setDataF(data);
    } else {
      setDataF(
        data.filter((Val) =>
          Val.Name.slice(0, searched.length).includes(searched)
        )
      );
    }
  }, [data, searched]);
  return (
    <>
      <div className="container">
        <input
          className="Search-Box"
          placeholder={"Search"}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
        />
        {dataF !== undefined &&
          dataF.map((val) => (
            <DataBox
              key={val.ID}
              id={val.ID}
              render={loadPost}
              Name={val.Name}
              Admin={Admin}
            />
          ))}
      </div>
    </>
  );
};
export default Search;
