import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home, Car } from "../pages";

export default function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Car />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
