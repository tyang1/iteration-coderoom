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
              <button id="placeholder" className="button" onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.btnLabel}</button>


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
              <Button btnLabel={context.deskBtn.text} onClick={context.goToDesk} disabled={context.deskBtn.disabled}/>
              <Button btnLabel={context.nightstandBtn.text} onClick={context.goToNightstand} disabled={context.nightstandBtn.disabled}/>
              <Button btnLabel={context.bedBtn.text} onClick={context.goToBed} disabled={context.bedBtn.disabled}/>
              <Button btnLabel={context.bossBtn.text} onClick={context.challengeBoss} disabled={context.bossBtn.disabled}/>
            </div>
          )}}
      </DM.Consumer>

    )}
}

export default ButtonContainer;