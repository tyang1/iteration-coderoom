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
          {/* <Timer /> */}
=======
>>>>>>> 4931feec2c0c777a577ea607daee93dffe4acdf9
        </div>
      </DungeonMaster>
    );
  }
}

export default App;
