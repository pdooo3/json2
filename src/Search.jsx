import { useEffect, useState } from "react";
import "boxicons";
import DataBox from "./DataBox";
const Search = ({ data, loadPost, Admin }) => {
  const [toggle, setToggle] = useState(null);
  const [searched, setSearched] = useState("");
  const [dataF, setDataF] = useState([]);
  useEffect(() => {
    if (searched === "") {
      setDataF(data);
    } else {
      console.log(searched);
      setDataF(
        data.filter((Name) =>
          Name.Name.slice(0, searched.length).includes(searched)
        )
      );
    }
  }, [data, searched]);

  return (
    <>
      <div className="container">
        <label>
          <input
            placeholder={"Search"}
            onChange={(e) => {
              setSearched(e.target.value);
            }}
          />
        </label>
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
