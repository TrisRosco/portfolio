import { React } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import ClickySwitch from "../../components/interface/ClickySwitch";
import ClickySwitch2 from "../../components/interface/ClickySwitch2";
import ClickyDial from "../../components/interface/ClickyDial";

const CoolInterface = () => {
  return (
    <div className="interface">
      <header className="interface-header">
        <NavBar />
      </header>
      <p className="interface-title">This is currently being worked on</p>
      <div className="interface-container">
      <h2>Clicky Switch</h2>
      <p>Tap, slide, then release to toggle</p>
        <ClickySwitch />
        <h2>Flippy Switch</h2>
        <p>Tap and swipe left and right to toggle</p>
        <ClickySwitch2 />
        <h2>The Dial</h2>
        <p>Currently broken, but it's funny so I've included it for now</p>
        <ClickyDial />
      </div>
    </div>
  );
};

export default CoolInterface;
