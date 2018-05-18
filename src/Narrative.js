import React, { Component } from 'react';
import './Narrative.css';

// STATE NEEDED:
// an array of strings containing all active paragraphs (storing max 10 paragraphs at a time)
// __STATEVAR is placeholder for state-based variables

// CSS:
// max height?
// must scroll if P's overflow
// for Paragraphs: not much, a font-family, if different from default, & a font size?
// STRETCH: jQuery to fade in new P's

class Narrative extends Component {
  render() {
    const paragraphs = __STATEVAR_PARAGRAPH_ARRAY.map((e, i) => <Paragraph key={`np${i}`} text={e} />);
    return (
      <div className="narrative-wrapper">
        {paragraphs}
      </div>
    );
  } 
}

export default Narrative;
