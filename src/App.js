import React from "react";
import "./App.css"
import Buttons from "./Components/Buttons";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Buttons />
    </div>
  )
}

export default App