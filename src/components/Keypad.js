import React, { Component } from 'react'

export default class Keypad extends Component {
  
  handleChange = () => {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleChange}/>
      </div>
    )
  }
}