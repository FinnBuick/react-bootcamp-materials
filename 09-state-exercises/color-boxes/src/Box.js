import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

export default class Box extends Component {
  state = {
    color: choice(this.props.colors),
  };

  pickColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  };

  handleClick = (e) => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
