import React, { Component } from "react";
import Box from "./Box.js";
import "./ColorBoxes.css";

export default class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ["purple", "yellow", "violet", "pink"],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
      return <Box colors={this.props.allColors} />;
    });
    return <div className="ColorBoxes">{boxes}</div>;
  }
}
