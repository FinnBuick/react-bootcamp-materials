import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sardines extends Component {
  render() {
    return (
      <div>
        <h1>Sardines</h1>
        <Link to="/">GO BACK</Link>
      </div>
    );
  }
}
