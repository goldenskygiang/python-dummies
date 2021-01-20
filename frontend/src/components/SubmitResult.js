import React, { Component } from "react";
import "../css/SubmitResult.css";
import Layout from "../components/Layout";
import TestResult from "../components/TestResult.js";

import axios from 'axios';

export default class SubmitResult extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   SubmitResult: [],
    // }
  }


//   componentDidMount() {

//   }

  render() {
    const Res = localStorage.res.split(",");
    // console.log(Res)
    return (
        <div className="SubmitResultBody">
          <div className="SubmitResultBodyHeader">
            <span>Submission Detail</span>
          </div>

          {
            Res.map((result, index) =><TestResult idx = {index} Result = {result}></TestResult>)
          } 
          
        </div>
    );
  }
}
