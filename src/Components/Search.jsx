import { useEffect, useState } from "react";
import "../CSS/Search.css";
import "boxicons";
import DataBox from "./DataBox";
import Pages from "./Pages";
const Search = ({ data, loadPost, Admin }) => {
  const [searched, setSearched] = useState("");
  const [dataF, setDataF] = useState([]);
  const filterData = (Val) => {
    for (var a in Val) {
      if (Val[a].slice(0, searched.length).includes(searched)) {
        return 1;
      }
    }
  };

  useEffect(() => {
    if (searched === "") {
      setDataF(data);
    } else {
      setDataF(data.filter((Val) => filterData(Val)));
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
        {dataF !== undefined && (
          <Pages
            data={dataF}
            loadPost={loadPost}
            Admin={Admin}
            searched={searched}
          />
        )}
      </div>
    </>
  );
};
export default Search;
