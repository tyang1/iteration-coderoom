import React, { Component } from 'react';
import './App.css';
import Narrative from './Narrative';
import Interactive from './Interactive';
import Inventory from './Inventory';
import { DungeonMaster } from './DungeonMaster';

class App extends Component {
  render() {
    return (

      <DungeonMaster className="wrapper">
        <Narrative className="narrative"/>
        <Interactive className="interactive"/>
        <Inventory className="inventory flex-container"/>
      </DungeonMaster>
    );
  }
}

export default App;
