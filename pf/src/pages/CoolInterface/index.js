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
      <p className="interface-description">
        This is something that I'm currently working on!
        <br />
        View this on a mobile device for the full experience!{" "}
        <span id="tiny-text">(unless you've got a fancy vibrating mouse)</span>
        <br />
        <br />
        So, what is haptic feedback? It's the little buzz that you feel when you
        tap a button on your phone. The idea is to make interfaces more
        intuitive and satisfying to use.
        <br />
        I know I'm not alone in this, but I'm a sucker for a good interface. I
        love the little sounds and animations that make it feel like you're
        actually interacting with something,
        <br />
        and I'm a firm believer that good design is more than just how something
        looks. It's how it feels, how it sounds, and how it behaves.
        <br />
        <br />A good interface is like a good joke. If you have to explain it,
        it's probably not very good!
      </p>
      <div className="interface-container">
        <h2 className="interface-subtitle">Flick Switch</h2>
        <p>
          Tap and drag left and right to toggle, nice and simple!
          <br />
          <br />
          This was the my original idea, inspired by those metal toggle switches
          that you see on old amplifiers and stuff.
          <br />
          It doesn't matter who you are, you can't resist flicking one of those
          things! I wanted to replicate the feeling of that satisfying click
        </p>
        <ClickySwitch2 />
        <p>
          But how is it done? We'll start with the CSS. The switch is made up of
          3 divs, the outer, inner, and handle. The outer div is the background,
          the inner div is the switch itself, and the handle is the little thing
          that you drag.
          <br />
          The handle is a circle with a series of box-shadows stacked on top of
          each other, each one slightly offset and darker than the last. This
          gives the illusion of depth and makes it look like a 3D object.
          <br />
          <br />
          The functionality is quite straightforward. While these switches,
          including others, utilize the Framer Motion library to handle the
          subtle elastic animation, the underlying logic is my own, and still
          would be possible without it.
          <br />
          When the user starts dragging the handle, the switch checks the x
          offset of the handle. If it's greater than 0, the switch is turned on,
          and vice versa.
          <br />
          A useState hook is used to keep track of the switch's state, and when
          the state changes, the switch plays a sound and vibrates the device.
          <br />
          At the same time, the useState is handed to the CSS as a data
          attribute, which is used to switch the direction of the box-shadows,
          and sets the flex direction of the handle to the opposite direction.
        </p>
        <h2 className="interface-subtitle">Tap & Slide Switch</h2>
        <p>Tap, slide, and release to toggle
        <br />
        <br />
        This one is a little more complicated, but it's fairly intuitive once you get the hang of it.
        <br />
        The idea is that it's not as easy to accidentally as the flick switch, so it can be used for more important things that you don't want to accidentally toggle.
        </p>
        <ClickySwitch />
        <p>
        Much like the flick switch, this one is made up of 3 divs, the outer, inner, and handle.
        <br />
        The functionality is very similar to the flick switch, but instead of checking the x offset against 0, it checks it against a pre-defined threshold.
        <br />
        If the offset is greater than the threshold, the switch is turned on, and vice versa.
        <br />
        The threshold is set to 100, which is about 1/3 of the width of the handle, and it can be adjusted to suit the needs of the interface.
        </p>
        <h2 className="interface-subtitle">Tappy Switch</h2>
        <p>Tap to toggle</p>
        <TappySwitch />
        <h2 className="interface-subtitle">The Dial</h2>
        <p>Currently broken, but it's funny so I've included it for now</p>
        <ClickyDial />
      </div>
    </div>
  );
};

export default CoolInterface;
