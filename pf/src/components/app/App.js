import "./App.css";
import { useEffect, useState } from "react";
function App() {

  useEffect(() => {
    console.log("App loaded");
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
