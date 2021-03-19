import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlip extends Component {
  state = {
    flips: 0,
    heads: 0,
    tails: 0,
    isHeads: true,
  };
  render() {
    return (
      <div>
        <h1>Lets flip a coin!</h1>
        <Coin isHeads={this.state.isHeads} />
        <p>{`Out of ${this.state.flips} there have been ${this.state.heads} and ${this.state.tails}.`}</p>
      </div>
    );
  }
}
