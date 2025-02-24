import React, { useState, useEffect } from "react";
import axios from "axios";
import "./s.css";
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
  if (loading) {
    document.body.classList.add("loadingBody");
  } else {
    document.body.classList.remove("loadingBody");
  }
  return (
    <>
      <div className={loading ? "loading" : ""}></div>
    </>
  );
};
export default DeleteItem;
