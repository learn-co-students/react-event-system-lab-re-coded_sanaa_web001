// Code Keypad Component Here
import React, { Component } from "react";

export class Keypad extends Component {
  handleKeyup = () => {
    console.log("Entering password...");
  };

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyup} />
      </div>
    );
  }
}

export default Keypad;
