import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "../navBar";
import NavDropDown from "../navDropDown";

function App() {
  const [dropDownState, setDropDownState] = useState(false);

  const toggleDropDown = () => {
    setDropDownState(!dropDownState);
  };

  useEffect(() => {
    console.log("App loaded");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="nav-bar" projectClick={toggleDropDown} zIndex="2" />
        <NavDropDown className="nav-drop-down" dropDownOpen={dropDownState} zIndex="1" />
      </header>
    </div>
  );
}

export default App;
