import React, { Component } from "react";
import { render } from "react-dom";
// import "./ButtonContainer.css";
import Button from "./Button.js";
import { DM } from './DungeonMaster';

class Button extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          // work?
          return (
            <div>
              <button id="placeholder" className="button" label={props.btnLabel}></button>
            </div>
          )}}
      </DM.Consumer>
    );
  }
}

// array of current button
class ButtonContainer extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          return (
            <div>
              {/* ButtonContainer placeholder */}
              <Button btnLabel="button 1"/>
              <Button btnLabel="button 2"/>
              <Button btnLabel="button 3"/>
            </div>
          )}}
      </DM.Consumer>

    )}
}

export default ButtonContainer;