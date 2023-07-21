import './styles.css';
import NavBar from '../../components/navBar';
import NavDropDown from '../../components/navDropDown';
import CrtOuter from '../../components/crtOuter';
import { useState, useEffect } from 'react';

const CRT = () => {

    const [dropDownState, setDropDownState] = useState(false);

    const toggleDropDown = () => {
        setDropDownState(!dropDownState);
    }

    useEffect(() => {
        console.log("CRT loaded");
    }, []);


    return (
        <div className="crt">
            <header className="crt-header">
                <NavBar className="nav-bar" projectClick={toggleDropDown} zIndex="5" />
                <NavDropDown className="nav-drop-down" dropDownOpen={dropDownState} zIndex="1" />
            </header>
            <CrtOuter />
        </div>
    );
}

export default CRT;


       

