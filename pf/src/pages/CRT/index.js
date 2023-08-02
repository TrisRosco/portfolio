import "./styles.css";
import NavBar from "../../components/navBar";
import CrtOuter from "../../components/crtOuter";
import { useEffect } from "react";

const CRT = () => {

  useEffect(() => {
    console.log("CRT loaded");

  }, []);

  return (
    <div className="crt">
      <header className="crt-header">
        <NavBar />
      </header>
      <div className="crt-container"> 
        <CrtOuter id={`crt-screen`} />
      </div>
    </div>
  );
};

export default CRT;
