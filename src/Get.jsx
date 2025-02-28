import { useEffect, useState } from "react";
import axios from "axios";
import Show from "./DataBox";
import Loading from "./Loding";
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
      <div className="container">
        {data.map((val) => (
          <Show key={val.ID} id={val.ID} render={loadPost} Name={val.Name} />
        ))}
        <Loading isLoading={loading} />
      </div>
    </>
  );
};
export default GET;
