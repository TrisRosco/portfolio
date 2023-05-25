import "./App.css";
import Button from "../button";
import ToggleSwitch from "../toggleSwitch";
import { useEffect, useState } from "react";
import jeff from "../../assets/images/jeff.jpg";

function App() {
  const [isNVGOn, setIsNVGOn] = useState(false);

  useEffect(() => {
    console.log("App loaded");
  }, []);

  const nvgMode = () => {
    setIsNVGOn(!isNVGOn);
    if (isNVGOn === true) {
      document.body.style.color = "green";
      console.log("nvg mode on");
    } else {
      document.body.style.color = "black";
      console.log("nvg mode off");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <ToggleSwitch onClick={nvgMode} />
        <p>My name is Tristan</p>
        <p>This is my cool app</p>
        <p>please hire me</p>
        <div id="buttonDiv">
          <Button>Click me</Button>
          <Button>Click me</Button>
        </div>
        {/* <img src={jeff} alt="jeff" /> */}
      </header>
    </div>
  );
}

export default App;
