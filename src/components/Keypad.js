// Code Keypad Component Here
import React, { Component } from "react";

export default class Keypad extends Component {
  handleKeyUP = () => {
    console.log("Entering password...");
  };
  render() {
    return (
      <input
        type="password"
        placeholder="Enter Password"
        onKeyUp={this.handleKeyUP}
      />
    );
  }
}