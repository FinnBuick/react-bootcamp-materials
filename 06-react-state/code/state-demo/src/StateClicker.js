import React, { Component } from "react";

export default class StateClicker extends Component {
  state = {
    num: 0,
    isWinner: false,
  };

  handleClick = (e) => {
    const rand = Math.floor(Math.random() * 10) + 1;
    const isSeven = rand === 7;
    this.setState({ num: rand, isWinner: isSeven });
  };

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {this.state.isWinner ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.handleClick}>Random Number</button>
        )}
      </div>
    );
  }
}
