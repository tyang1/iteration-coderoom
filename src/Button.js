import React, { Component } from "react";
import { render } from "react-dom";
// import "./Button.css";

const Button = (props) => (
  <div>
    <button id={props.btnLabel} className="button" label={props.btnLabel}></button>
  </div>
);

export default Button;