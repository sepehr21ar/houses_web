import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import Detail from "./pages/DetailPage/Detail.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};
