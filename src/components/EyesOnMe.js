// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  handleBlur = () => {
    console.log('Hey! Eyes on me!');

  }
  hadleFoucs = () => {
    console.log("Good!");
  }
  render() {
    return (
      <div>
        <button onFocus={this.hadleFoucs} onBlur={this.handleBlur}>click me</button>
      </div>
    )
  }}