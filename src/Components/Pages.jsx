import { useEffect, useState } from "react";
import DataBox from "./DataBox";
import "../CSS/Pages.css";
export default function Pages({ searched, data, loadPost, Admin }) {
  const showCardNum = 4;
  const [pages, setPages] = useState(0);
  const [dataInPage, setDataInPage] = useState([]);
  const [firstIndexOfPage, setFirstIndexOfPage] = useState(0);
  useEffect(() => {
    setFirstIndexOfPage(
      pages + 1 === 1 ? 0 : (pages + 1) * showCardNum - showCardNum
    );
    setDataInPage(data.slice(firstIndexOfPage, firstIndexOfPage + showCardNum));
  }, [pages, firstIndexOfPage, data]);
  useEffect(() => {
    setPages(0);
  }, [searched]);
  return (
    <>
      {dataInPage.map((val) => (
        <DataBox
          key={val.ID}
          id={val.ID}
          render={loadPost}
          Name={val.Name}
          Age={val.Age}
          City={val.City}
          Admin={Admin}
        />
      ))}

      <div className="pages">
        {data.length / showCardNum > 1
          ? Array.from({ length: Math.ceil(data.length / showCardNum) }).map(
              (_, index) => (
                <button
                  className={pages === index ? "active" : "notAvtive"}
                  onClick={() => {
                    setPages(index);
                  }}
                  key={index}
                >
                  {index + 1}
                </button>
              )
            )
          : ""}
      </div>
    </>
  );
}
