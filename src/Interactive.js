import React, { Component } from 'react';
// import './Interactive.css';

import ChallengePrompt from './ChallengePrompt.js';
import ButtonContainer from './ButtonContainer.js';
import Button from './Button.js';
import Timer from './Timer.js';
import CodingBox from './CodingBox.js';

/**
 * Data needed? Game state 
 * Data to pass down to child component via Context API
 */

class Interactive extends Component {
  render() {
    return (
      <div>
        <ChallengePrompt />
        <ButtonContainer />
        <Timer />
        <CodingBox />
      </div>
    );
  }
}

export default Interactive;
