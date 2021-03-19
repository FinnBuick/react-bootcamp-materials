import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(newBox) {
    this.setState((state) => ({
      boxes: [...state.boxes, newBox],
    }));
  }

  removeBox(id) {
    this.setState((state) => ({
      boxes: state.boxes.filter((b) => b.id !== id),
    }));
  }

  render() {
    return (
      <div>
        <h1>Box Maker Thingy</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((b) => (
          <Box
            key={b.id}
            id={b.id}
            height={b.height}
            width={b.width}
            backgroundColor={b.backgroundColor}
            remove={() => this.removeBox(b.id)}
          />
        ))}
      </div>
    );
  }
}
