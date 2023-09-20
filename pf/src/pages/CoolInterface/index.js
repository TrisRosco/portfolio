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
      View this on a mobile device for the full experience! <span id="tiny-text">(unless you've got a fancy vibrating mouse)</span>
      <br />
      <br />
      So, what is haptic feedback? It's the little buzz that you feel when you tap a button on your phone. The idea is to make interfaces more intuitive and satisfying to use.
      <br />
      I know I'm not alone in this, but I'm a sucker for a good interface. I love the little sounds and animations that make it feel like you're actually interacting with something,
      <br />
      and I'm a firm believer that good design is more than just how something looks. It's how it feels, how it sounds, and how it behaves.
      <br />
      A good interface is like a good joke. If you have to explain it, it's probably not very good!
      </p>
      <div className="interface-container">
        <h2 className="interface-subtitle">Flick Switch</h2>
        <p>Tap and drag left and right to toggle, nice and simple!
        <br />
        <br />
        This was the my original idea, inspired by those metal toggle switches that you see on old amplifiers and stuff.
        <br />
        It doesn't matter who you are, you can't resist flicking one of those things! I wanted to replicate the feeling of that satisfying click
        </p>
        <ClickySwitch2 />
        <p>But how is it done? We'll start with the CSS. The switch is made up of 3 divs, the outer, inner, and handle. The outer div is the background, the inner div is the switch itself, and the handle is the little thing that you drag.
        <br />
        The handle is a circle with a series of box-shadows stacked on top of each other, each one slightly offset and darker than the last. This gives the illusion of depth and makes it look like a 3D object.
        </p>
        <h2 className="interface-subtitle">Flippy Switch</h2>
        <p>Tap and swipe left and right to toggle</p>
        <ClickySwitch />
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
