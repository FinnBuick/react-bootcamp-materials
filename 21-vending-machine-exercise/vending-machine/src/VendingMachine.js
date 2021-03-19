import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>HELLO I AM A VENDING MACHINE WHAT WOULD YOU LIKE TO EAT</h1>
        <div className="links">
          <ul>
            <li>
              <Link to="/soda">SODA</Link>
            </li>
            <li>
              <Link to="/chips">CHIPS</Link>
            </li>
            <li>
              <Link to="/sardines">FRESH SARDINES</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
