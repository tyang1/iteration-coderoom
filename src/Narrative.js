import React, { Component } from 'react';

import { DM } from './DungeonMaster';

// STATE NEEDED:
// an array of strings containing all active paragraphs (storing max 10 paragraphs at a time)
// __STATEVAR is placeholder for state-based variables

// CSS:
// max height?
// must scroll if P's overflow
// for Paragraphs: not much, a font-family, if different from default, & a font size?
// STRETCH: jQuery to fade in new P's


class Paragraph extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  } 
}

class Narrative extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          const paragraphs = context.activeNarrative.map((e, i) => <Paragraph key={`np${i}`} text={e} />);
          return (
            <div className="narrative">
              {paragraphs}
            </div>
          );
        }}
      </DM.Consumer>
    )}
}

export default Narrative;
