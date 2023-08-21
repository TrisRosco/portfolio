import { React } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import ClickySwitch from "../../components/interface/ClickySwitch";

const CoolInterface = () => {
  return (
    <div className="interface">
      <header className="interface-header">
        <NavBar />
      </header>
      <div className="interface-container">
        <ClickySwitch />
      </div>
    </div>
  );
};

export default CoolInterface;
