import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      backgroundColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuid() };
    this.props.addBox(newBox);
    this.setState({ height: 0, width: 0, backgroundColor: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="width">Width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="backgroundColor">backgroundColor</label>
          <input
            type="text"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <br />
          <button>Add a new box!</button>
        </form>
      </div>
    );
  }
}
