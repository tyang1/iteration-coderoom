import React, { Component } from "react";
import { render } from "react-dom";

import { DM } from './DungeonMaster';

class Button extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          // work?
          return (
            <div>
              <button id="placeholder" className="button" >{this.props.btnLabel}</button>


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
              <Button btnLabel={context.deskBtn.text}/>
              <Button btnLabel={context.nightstandBtn.text}/>
              <Button btnLabel={context.bedBtn.text}/>
              <Button btnLabel={context.bossBtn.text}/>
            </div>
          )}}
      </DM.Consumer>

    )}
}

export default ButtonContainer;