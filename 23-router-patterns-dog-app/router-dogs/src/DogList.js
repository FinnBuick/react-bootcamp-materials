import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List!</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map((d) => (
              <div className="Dog col-md-6 col-lg-4 text-center">
                <Link to={`/dogs/${d.name}`}>
                  <img src={d.src} alt={d.name} />
                  <h3 className="display-5 uppercase">{d.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
