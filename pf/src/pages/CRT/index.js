import './styles.css';
import NavBar from '../../components/navBar';
import NavDropDown from '../../components/navDropDown';
import CrtOuter from '../../components/crtOuter';
import { useState, useEffect } from 'react';

const CRT = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const [isCrtVisible, setIsCrtVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownState(!dropDownState);
  }

  useEffect(() => {
    console.log("CRT loaded");

    // When the component has loaded, set the "isCrtVisible" state to true,
    // which will trigger the fade-in effect through the CSS class
    setIsCrtVisible(true);
  }, []);

  return (
    <div className="crt">
      <header className="crt-header">
        <NavBar  projectClick={toggleDropDown}/>
        <NavDropDown  dropDownOpen={dropDownState} />
      </header>
      <div className={`crt-container ${isCrtVisible ? 'fade-in' : ''}`}>
        <CrtOuter />
      </div>
    </div>
  );
}

export default CRT;