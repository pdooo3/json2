import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loding";
import Search from "./Search";
const GET = ({ Admin }) => {
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
      <Search data={data} loadPost={loadPost} Admin={Admin} />
      <div className="container">
        <Loading isLoading={loading} />
      </div>
    </>
  );
};
export default GET;
