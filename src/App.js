import React, { Component } from 'react';
import './App.css';
import Narrative from './Narrative';
import Interactive from './Interactive';
import Inventory from './Inventory';
import { DungeonMaster } from './DungeonMaster';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="narrative"></div>
        <div className="interactive"></div>
        <div className="inventory">
          <p>Inventory</p>
          <div className="flex-container">
            <div>paper clip </div>
            <div>paper jee eee</div>
            <div>12 epes slek</div>  
          </div>
        </div>
        {/* <Interactive /> */}
      </div>
      // <DungeonMaster>
      //   <Narrative />
      //   <Interactive />
      //   <Inventory />
      // </DungeonMaster>
    );
  }
}

export default App;
