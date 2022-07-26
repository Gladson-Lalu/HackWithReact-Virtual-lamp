import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home.page";
import Lamp from "./components/lamp/lamp.page";

function App() {
  return (
    <Routes>
      <Route path="/lamp" element={<Lamp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
