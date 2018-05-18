import React, { Component } from "react";
import { render } from "react-dom";
// import "./CodingBox.css";

class CodingBox extends Component {
  render() {
    return (
      <DM.Consumer>
        {context => {
          
          return (
            <div>
              {/*This is where the Code Mirror Box goes*/}
            </div>
          )}
        }
      </DM.Consumer>
    );
  }
}
const CodingBox = (props) => (
  <div>
    Coding Box
  </div>
);

export default CodingBox;