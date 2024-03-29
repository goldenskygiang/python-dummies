import React, { useState } from "react";

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../css/Navbar.css";

const LogOut = () => {
  localStorage.clear();
  window.location.href = "/"
}

const MoveToProfile = () => {
  window.location.href = `/Profile`
}

const Validate = (link)=>{
  if(!localStorage.getItem('username')){
    alert("Please login first");
  }
  else{
    // console.log("check link", link)
    window.location.href = link;
  }
}
 
const Navbar = ({ setLogInOpen, setSignUpOpen }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="nav-links">
        <a className="navbar-brand" href="/">
          PYTHON DUMMIES
        </a>

        {/* <span className="navbar-text"> <a className="login" href="#">Log In</a></span> */}
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-link-container">
            <li className="nav-item active">
              <a className="nav-link a_hover first-nav-item" onClick = {() => Validate("/Problemset")}>
                Problemset<span className="sr-only"></span>
              </a>
            </li>

            <li className="nav-item active last-nav-item">
              <a className="nav-link a_hover" onClick = {() => Validate("/Quizzes")}>
                Quizzes<span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {localStorage.token && 
        <div className = "Nav-UserName nav-btns">
          <div className = "UserName" onClick={() => MoveToProfile()}>
            {localStorage.username}
          </div>
          <button className="btn btn--login" onClick={() => LogOut()}>
            Logout
          </button>
        </div>
      }

      {!localStorage.token &&
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
      }
    </nav>
  );
};

export default Navbar;
