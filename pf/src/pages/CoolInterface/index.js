import { React } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";
import ClickySwitch from "../../components/interface/ClickySwitch";
import ClickySwitch2 from "../../components/interface/ClickySwitch2";
import ClickyDial from "../../components/interface/ClickyDial";
import TappySwitch from "../../components/interface/TappySwitch";

const CoolInterface = () => {
  return (
    <div className="interface">
      <header className="interface-header">
        <NavBar />
      </header>
      <h1 className="interface-title">Haptic Feedback</h1>
      <p className="interface-description">This is something that I'm currently working on!
      <br />
      View this page on a mobile device to see it in action.
      <br />
      It's a collection of buttons and switches that give haptic feedback when you interact with them.
      <br />
      I'm using the Framer Motion library to handle the animations and interactions.
      <br />
      </p>
      <div className="interface-container">
        <h2 className="interface-subtitle">Clicky Switch</h2>
        <p>Tap, slide, then release to toggle</p>
        <ClickySwitch />
        <h2 className="interface-subtitle">Flippy Switch</h2>
        <p>Tap and swipe left and right to toggle</p>
        <ClickySwitch2 />
        <h2 className="interface-subtitle">The Dial</h2>
        <p>Currently broken, but it's funny so I've included it for now</p>
        <ClickyDial />
        <h2 className="interface-subtitle">Tappy Switch</h2>
        <p>Tap to toggle</p>
        <TappySwitch />

      </div>
    </div>
  );
};

export default CoolInterface;
