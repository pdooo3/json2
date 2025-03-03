import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loding";
const DeleteItem = ({ id, render }) => {
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    async function loadPost() {
      setLoading(true);
      await axios.delete(`https://testapitome.freehost.io?key=maryam&id=${id}`);
      render();
      setLoading(false);
    }
    loadPost();
  }, [id]);
  return (
    <>
      <Loading isLoading={loading} />
    </>
  );
};
export default DeleteItem;
