import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die1: "one",
    die2: "one",
    isRolling: false,
  };

  roll = () => {
    // pick two new rolls
    let res1 = this.props.sides[Math.floor(Math.random() * 6)];
    let res2 = this.props.sides[Math.floor(Math.random() * 6)];
    // update state
    this.setState({ die1: res1, die2: res2, isRolling: true });
    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
