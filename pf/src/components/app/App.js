import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "../../pages/About";
import CRT from "../../pages/CRT";
import Contact from "../../pages/Contact";
import LITTR from "../../pages/LITTR";
import CoolInterface from "../../pages/CoolInterface";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/crt" element={<CRT />} />
        <Route path="/littr" element={<LITTR />}/>
        <Route path="/interface" element={<CoolInterface />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
