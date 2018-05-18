import React, { Component } from "react";
import { render } from "react-dom";
// import "./ButtonContainer.css";
import Button from "./Button.js";

const ButtonContainer = (props) => (
  <div>
    ButtonContainer placeholder
    <Button btnLabel="button 1"/>
    <Button btnLabel="button 2"/>
    <Button btnLabel="button 3"/>
  </div>
);

export default ButtonContainer;