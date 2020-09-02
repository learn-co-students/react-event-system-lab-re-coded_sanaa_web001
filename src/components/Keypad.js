import React,{ Component } from "react";

// Code Keypad Component Here
export default class Keypad extends Component{

    KeyUp(){
        console.log("Entering password...");
    }
    render(){
        return( 
        <input type="password" onKeyUp={this.KeyUp}/>
        )
    }
}