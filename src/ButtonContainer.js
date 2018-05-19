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
              <button id="placeholder" className="button" onClick={this.props.onClick}>{this.props.btnLabel}</button>


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
              <Button btnLabel={context.deskBtn.text} onClick={context.goToDesk}/>
              <Button btnLabel={context.nightstandBtn.text} onClick={context.goToNightstand}/>
              <Button btnLabel={context.bedBtn.text} onClick={context.goToBed}/>
              <Button btnLabel={context.bossBtn.text} />
            </div>
          )}}
      </DM.Consumer>

    )}
}

export default ButtonContainer;