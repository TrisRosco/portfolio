import { Routes } from 'react-router-dom';
import './styles.css';
import NavBar from '../../components/navBar';
import NavDropDown from '../../components/navDropDown';
import CrtOuter from '../../components/crtOuter';

const CRT = () => {
    return (
        <div className="crt">
        <NavBar />
        <NavDropDown />
        <CrtOuter />
        </div>
    );
}

export default CRT;


       

