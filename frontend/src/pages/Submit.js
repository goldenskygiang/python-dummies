import React, { Component } from "react";
import "../css/Submit.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import Editor from "../components/Editor.js"

export default class Submit extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Submit">
        <div className="SubmitHeader">
          <Navbar></Navbar>
        </div>

        <div className="SubmitBody">
          <div className = "SubmitTitle">
              <span>Submit a solution</span>
          </div>

          <div className = "SubmitProblemId">
              <span className = "SubmitProblemIdTitle">Problem code</span>
              <span className = "SubmitProblemIdId">P001</span>
          </div>

          <div className = "SubmitLanguage">
              <span className = "SubmitLanguageTitle">Language</span>
              <span className = "SubmitLanguageLanguage">Python</span>
          </div>

          {/* <Editor></Editor> */}

        </div>

        <div className ="SubmitFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
