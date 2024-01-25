import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Reel from "./pages/Desktop";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/Reels" element={<Reel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
