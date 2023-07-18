import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "../navBar";

function App() {

  useEffect(() => {
    console.log("App loaded");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar className="nav-bar" />
        <p>Hey</p>
      </header>
    </div>
  );
}

export default App;
