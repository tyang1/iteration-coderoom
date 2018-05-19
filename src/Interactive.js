import React, { Component } from 'react';
import { DM } from './DungeonMaster';

import ChallengePrompt from './ChallengePrompt.js';
import ButtonContainer from './ButtonContainer.js';
// import Button from './Button.js';
import Timer from './Timer.js';
import CodingBox from './CodingBox.js';

/**
 * Data needed? Game state 
 * Data to pass down to child component via Context API
 */

class Interactive extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          const codingBox = context.challengeActive ?  <CodingBox /> : <div></div>;
          return (
            <div className="interactive">
              <ChallengePrompt />
              <ButtonContainer />
              {codingBox}
              <Timer />
            </div>
          )}}
      </DM.Consumer>
    );
  }
}

export default Interactive;
