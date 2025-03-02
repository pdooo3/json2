import { useEffect, useState } from "react";
import DataBox from "./DataBox";
const Search = ({ data, loadPost }) => {
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
        <input
          placeholder="search somting"
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
            />
          ))}
      </div>
    </>
  );
};

export default Search;
