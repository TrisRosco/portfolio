import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../../pages/About";
import CRT from "../../pages/CRT";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/crt" element={<CRT />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
