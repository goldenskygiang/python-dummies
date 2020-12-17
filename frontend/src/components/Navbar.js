import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="/">
            PYTHON DUMMIES
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/Problemset">
                  Problemset<span className="sr-only"></span>
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/Quizzes">
                  Quizzes<span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
          {/* <span className="navbar-text"> <a className="login" href="#">Log In</a></span> */}
          <button className="btn btn-light btn_css btn-sm">Login</button>
          <a
            className="btn btn-light action-button btn_css btn-sm"
            role="button"
            href="#"
          >
            Sign Up
          </a>
        </nav>
      </div>
    );
  }
}
