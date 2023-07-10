import "./App.css";
import ToggleSwitch from "../toggleSwitch";
import CrtOuter from "../crtOuter";
import { useEffect, useState } from "react";
import jeff from "../../assets/images/jeff.jpg";
function App() {
  const [isNVGOn, setIsNVGOn] = useState(false);
  const [deviceUptime, setDeviceUptime] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);

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

  const handlePowerCalc = (e) => {
    setDeviceUptime(e.target.value);
    setPowerConsumption(Math.round(e.target.value * 0.14 * 10) / 10);
  };

  return (
    <div className="App">
      <header className="App-header">
        
          <CrtOuter />
        <ToggleSwitch isNVGOn={isNVGOn} nvgMode={nvgMode} />

      </header>
    </div>
  );
}

export default App;
