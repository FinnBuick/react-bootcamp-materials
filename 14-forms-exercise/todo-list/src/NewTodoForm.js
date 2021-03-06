import React, { Component } from "react";

export default class todoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
    this.props.addTodo(this.state);
    this.setState({
      task: "",
      completed: false,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}
