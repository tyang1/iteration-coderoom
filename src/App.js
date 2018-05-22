import React, { Component } from "react";
import "./App.css";
import Narrative from "./Narrative";
import Interactive from "./Interactive";
import Inventory from "./Inventory";
import { DungeonMaster } from "./DungeonMaster";
import Login from "./login";


class App extends Component {
  render() {
    return (
      <DungeonMaster>
        <div className="wrapper">
          <Login />
          <Narrative />
          <Interactive />
          <Inventory />
<<<<<<< HEAD
=======

>>>>>>> aabf530381b4af01e0ced99319cf8f052f58a333
        </div>
      </DungeonMaster>
    );
  }
}

export default App;
