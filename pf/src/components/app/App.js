import "./App.css";
import Button from "../button";
import ToggleSwitch from "../toggleSwitch";
import { useEffect, useState } from "react";
import TextBlock from "../textBlock";
// import jeff from "../../assets/images/jeff.jpg";

function App() {
  const [isNVGOn, setIsNVGOn] = useState(false);

  useEffect(() => {
    console.log("App loaded");
  }, []);

  // a function that changes the color of the text in the textblock component

  const nvgMode = () => {
    setIsNVGOn(!isNVGOn);
    if (isNVGOn === true) {
      console.log("nvg mode on");
    } else {
      console.log("nvg mode off");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <TextBlock
          showShadow={isNVGOn ? true : false}
          textColor={isNVGOn ? "#7FFF00" : "#006400"}
          text1="My name is Tristan"
          text2="This is my cool app"
          text3="please hire me"
        />
        <div id="buttonDiv">
          <Button>Click me</Button>
          <ToggleSwitch TestId="toggle" onClick={nvgMode} />
        </div>
        {/* <img src={jeff} alt="jeff" /> */}
      </header>
    </div>
  );
}

export default App;
