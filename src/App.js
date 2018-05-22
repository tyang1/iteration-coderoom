import React, { Component } from 'react';
import './App.css';
import Narrative from './Narrative';
import Interactive from './Interactive';
import Inventory from './Inventory';
import { DungeonMaster } from './DungeonMaster';

class App extends Component {
  render() {
    return (

      <DungeonMaster >
        <div className="wrapper">
          <Narrative />
          <Interactive />
          <Inventory />
          {/* <Timer /> */}
        </div>
      </DungeonMaster>
    );
  }
}

export default App;
