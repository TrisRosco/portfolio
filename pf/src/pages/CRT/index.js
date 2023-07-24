import "./styles.css";
import NavBar from "../../components/navBar";
import CrtOuter from "../../components/crtOuter";
import { useState, useEffect } from "react";

const CRT = () => {
  const [isCrtVisible, setIsCrtVisible] = useState(false);

  useEffect(() => {
    console.log("CRT loaded");

    // When the component has loaded, set the "isCrtVisible" state to true,
    // which will trigger the fade-in effect through the CSS class
    setIsCrtVisible(true);
  }, []);

  return (
    <div className="crt">
      <header className="crt-header">
        <NavBar />
      </header>
      <div className={`crt-container ${isCrtVisible ? "fade-in" : ""}`}>
        <CrtOuter id={`crt-screen`} />
      </div>
    </div>
  );
};

export default CRT;
