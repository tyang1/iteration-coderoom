import React, { Component } from 'react';
import './Paragraph.css';

// PROPS NEEDED:
// a string, the text for that narrative event

// CSS:
// controlled in parent (Narrative.css)

class Paragraph extends Component {
  render() {
    return (
      <div className="narrative-paragraph">
        <p>{this.props.text}</p>
      </div>
    );
  } 
}

export default Paragraph;
