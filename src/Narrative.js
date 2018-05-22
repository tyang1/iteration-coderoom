import React, { Component } from "react";

import { DM } from "./DungeonMaster";

// STATE NEEDED:
// an array of strings containing all active paragraphs (storing max 10 paragraphs at a time)
// __STATEVAR is placeholder for state-based variables

// CSS:
// max height?
// must scroll if P's overflow
// for Paragraphs: not much, a font-family, if different from default, & a font size?
// STRETCH: jQuery to fade in new P's

// class Paragraph extends Component {
//   componentDidMount() {
//     const element = document.getElementById("narrative-wrapper-box");
//     element.scrollTop = 0;
//   }
//   render() {
//     return <p className="narrative-paragraph">{this.props.text}</p>;
//   }
// }

class Narrative extends Component {
  componentDidMount() {
    const element = document.getElementById("narrative-wrapper-box");
    element.scrollTop = 0;
  }
  render() {
    return (
      <DM.Consumer>
        {context => {
          const paragraphs = context.activeNarrative.map((e, i) => {
            if (i === 0) return <p key={`np${i}`} className="current-narrative">{e}</p>;
            else return <p key={`np${i}`} className="narrative-paragraph">{e}</p>;
        });
          return (
            <div id="narrative-wrapper-box" className="narrative">
              {paragraphs}
            </div>
          );
        }}
      </DM.Consumer>
    );
  }
}

export default Narrative;
