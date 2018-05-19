import React, { Component } from "react";
import { render } from "react-dom";
import { DM } from './DungeonMaster';
import CodeMirror from 'codemirror';
// import "./CodingBox.css";

let editor;

class CodingBox extends Component {
  componentDidMount() {
    editor = CodeMirror.fromTextArea(document.getElementById("demotext"), {
      lineNumbers: true,
      mode: "javascript",
      matchBrackets: true
    });
  }

  render() {
    return (
      <DM.Consumer>
        {context => {
          if (!context.challengeActive) return <div></div>
          // var doc = editor.getDoc();
          // console.log(doc);
          // console.log(doc.getValue());
          return (
            <div className="coding-wrapper">
              <form style="position: relative; margin-top: .5em;">
                <textarea id="demotext"></textarea>
                <button type="button" onClick={() => context.submitTest(editor.getValue())}>RUN</button>
              </form>
            </div>
            )
        }}
      </DM.Consumer>
    ) 
  }
}

export default CodingBox;
