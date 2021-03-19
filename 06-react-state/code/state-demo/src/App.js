import React, { Component } from "react";
import Game from "./Game";
import Demo from "./Demo";
import Button from "./Button";
import BrokenClick from "./BrokenClick";
import Rando from "./Rando";
import Clicker from "./Clicker";
import StateClicker from "./StateClicker";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateClicker />
      </div>
    );
  }
}

export default App;
