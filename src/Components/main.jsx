import { createRoot } from "react-dom/client";
import { Routes, BrowserRouter, Router, Route, Link } from "react-router";
import Add from "./AddData";
import Admin from "./Admin";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="json2/add" element={<Add />} />
        <Route path="/json2" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </>
);
