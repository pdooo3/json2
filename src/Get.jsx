import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./DataBox";
import "./s.css";
const GET = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    loadPost();
  }, []);
  async function loadPost() {
    setLoading(true);
    await axios
      .get(`https://testapitome.freehost.io?key=maryam`)
      .then((res) => setData(res.data));
    setLoading(false);
  }

  return (
    <>
      <div className="fBox">
        {data.map((val) => (
          <Show key={val.ID} id={val.ID} Name={val.Name} render={loadPost} />
        ))}
        <div className={loading ? "loading" : ""}></div>
      </div>
    </>
  );
};
export default GET;
