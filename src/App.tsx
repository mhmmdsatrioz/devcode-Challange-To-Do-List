import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navs";
import Home from "./page";
import ActivityDetail from "./page/Activity/[id]";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ActivityDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
