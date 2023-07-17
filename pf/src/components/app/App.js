import "./App.css";
import ToggleSwitch from "../toggleSwitch";
import CrtOuter from "../crtOuter";
import { useEffect, useState } from "react";
import jeff from "../../assets/images/jeff.jpg";
import welcome from "../../assets/sounds/welcome.mp3";
function App() {
  const [isNVGOn, setIsNVGOn] = useState(false);

  useEffect(() => {
    console.log("App loaded");
  }, []);

  useEffect(() => {
    if (isNVGOn === true) {
      console.log("nvg mode on");
    } else {
      console.log("nvg mode off");
    }
  }, [isNVGOn]);

  const nvgMode = () => {
    setIsNVGOn(!isNVGOn);
  };

  const playWelcome = () => {
    const audio = new Audio(welcome);
    audio.play();
  };


  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
