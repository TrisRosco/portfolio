import { React } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import ClickySwitch from "../../components/interface/ClickySwitch";
import ClickyDial from "../../components/interface/ClickyDial";

const CoolInterface = () => {
  return (
    <div className="interface">
      <header className="interface-header">
        <NavBar />
      </header>
      <p className="interface-title">Testing haptic feedback</p>
      <div className="interface-container">
        <ClickySwitch />
        <ClickyDial />
      </div>
    </div>
  );
};

export default CoolInterface;
