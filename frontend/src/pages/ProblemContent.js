import React, { Component } from "react";
import "../css/ProblemContent.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import ProblemDescription from '../components/ProblemDescription.js';
import ProblemCondition from '../components/ProblemCondition.js';

export default class ProblemContent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="ProblemContent">
        <div className="ProblemContentHeader">
          <Navbar></Navbar>
        </div>

        <div className="ProblemContentBody">
          <ProblemDescription></ProblemDescription>
          {/* <Login></Login> */}
          <ProblemCondition></ProblemCondition>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>

        <div className ="ProblemContentFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
