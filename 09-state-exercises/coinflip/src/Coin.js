import React, { Component } from "react";
import "./Coin.css";

export default class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img
          src={`https://tinyurl.com/react-coin-${
            this.props.isHeads ? "heads" : "tails"
          }-jpg`}
          alt=""
        />
      </div>
    );
  }
}
