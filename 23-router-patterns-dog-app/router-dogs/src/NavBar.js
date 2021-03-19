import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "white",
    };
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand">Dog App</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="navbar-collapse"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dogs">
                    Home
                  </NavLink>
                </li>
                {this.props.dogs.map((dog) => {
                  return (
                    <li className="nav-item">
                      <NavLink
                        key={dog.name}
                        className="nav-link"
                        exact
                        to={`/${dog.name}`}
                        activeStyle={activeStyle}
                      >
                        {dog.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
