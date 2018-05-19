import React, { Component } from "react";
import { render } from "react-dom";
import { DM } from './DungeonMaster';
// import "./ChallengePrompt.css";
import {DungeonMaster, DM} from './DungeonMaster';

class ChallengePrompt extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          return (
            <div>
              {context.promptText}
            </div>
          )}}
      </DM.Consumer>
    );
  }
}

export default ChallengePrompt;
