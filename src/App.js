import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Interactive from "./Interactive";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="narrative"></div>
        <div className="interactive"></div>
        <div className="inventory">Inventory</div>
        {/* <Interactive /> */}
      </div>
    );
  }
}

export default App;
