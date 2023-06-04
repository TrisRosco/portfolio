import "./App.css";
import Button from "../button";
import ToggleSwitch from "../toggleSwitch";
import { useEffect, useState } from "react";
import TextBlock from "../textBlock";
import jeff from "../../assets/images/jeff.jpg";
import Card from "../card";

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

  return (
    <div className="App">
      <header className="App-header">
        <TextBlock
          showShadow={isNVGOn ? true : false}
          textColor={isNVGOn ? "#7FFF00" : "#006400"}
          text1="My name is Tristan"
          text2="Look at this cool app"
          text3="Please hire me"
        />
        <div id="buttonDiv">
          {/* <Button>Click me</Button> */}
          <ToggleSwitch TestId="toggle" onClick={nvgMode} />
        </div>
        {/* <img src={jeff} alt="jeff" /> */}
        <Card header="Let's clean up pentewan beach!" body="This beach is utterly disgusting, let's do something about it!" />
        <Card header="The park is full of heroin needles" body="I can't eat them all by myself" />
      </header>
    </div>
  );
}

export default App;
