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
        </div>
      </DungeonMaster>
    );
  }
  // render(){
  //   return(
  //     <div>
  //       <h2>Hello World</h2>
  //     </div>
  //   )
  // }
}

export default App;
