import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../../pages/About";
import CRT from "../../pages/CRT";
import Contact from "../../pages/Contact";
import LITTR from "../../pages/LITTR";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/crt" element={<CRT />} />
        <Route path="/littr" element={<LITTR />}/>
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
