import "./App.css";
import Button from "../button";
import ToggleSwitch from "../toggleSwitch";
import { useEffect, useState } from "react";
import jeff from "../../assets/images/jeff.jpg";

function App() {
  useEffect(() => {
    console.log("App loaded");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ToggleSwitch> </ToggleSwitch>
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
