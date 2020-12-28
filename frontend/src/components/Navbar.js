import React, { useState } from "react";
import SingUp from "./SignUp"
import LogIn from "./LogIn"

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/Navbar.css";

<<<<<<< HEAD
const Navbar = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLogInOpen] = useState(false);

=======
const Navbar = ({ setLogInOpen, setSignUpOpen }) => {
>>>>>>> 2bb2e5022935340d3408c3ad7bf6907c788c37d7
  return (
    <nav className="navbar navbar-expand-lg">
      <SignUp isOpen={isSignUpOpen} setIsOpen={setSignUpOpen} />
      <LogIn isOpen={isLogInOpen} setIsOpen={setLogInOpen} />
      <div className="nav-links">
        <a className="navbar-brand" href="/">
          PYTHON DUMMIES
        </a>

        {/* <span className="navbar-text"> <a className="login" href="#">Log In</a></span> */}
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-link-container">
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
      </div>
      <div className="nav-btns">
        <button className="btn btn--login" onClick={() => setLogInOpen(true)}>
          Login
        </button>
        <button
          className="btn btn--signup action-button"
          onClick={() => setSignUpOpen(true)}
        >
          Sign Up
        </button>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar3"></div>
          </span>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
