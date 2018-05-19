import React, { Component } from "react";
import { render } from "react-dom";
import { DM } from './DungeonMaster';
// import "./CodingBox.css";
import { DM } from "./DungeonMaster";

class CodingBox extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          return (
            <div>
              {/* Coding Box */}
            </div>
          )}}
      </DM.Consumer>
    ) 
  }
}

export default CodingBox;