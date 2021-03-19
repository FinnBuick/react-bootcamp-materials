import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    let isActive = this.props.score === undefined;
    return (
      <tr
        className={`RuleRow ${
          isActive ? "RuleRow-active" : "RuleRow-disabled"
        }`}
        onClick={isActive ? this.props.doScore : () => {}}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        {isActive ? (
          <td className="RuleRow-score">{this.props.description}</td>
        ) : (
          <td className="RuleRow-score">{this.props.score}</td>
        )}
      </tr>
    );
  }
}

export default RuleRow;
