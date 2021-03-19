import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <i
        class={`Die fas fa-dice-${this.props.face} fa-10x ${
          this.props.rolling && "shaking"
        }`}
      ></i>
    );
  }
}
