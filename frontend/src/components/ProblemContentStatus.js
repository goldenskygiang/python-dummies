import React, { Component } from "react";
import "../css/ProblemContentStatus.css";
import BASE_URL from "../global.js";

import axios from 'axios';
import { string } from "prop-types";

export default class ProblemContentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ProblemScore: -1
    }
  }


  componentDidMount() {

    this.setState({
        ProblemScore: localStorage.Problemscore
    })
  }





  render() {
    let {ProblemScore} = this.state;
    // console.log()
    let ScoreDisplay = ProblemScore >= 0 ? String(ProblemScore) + " / 100" : "No Scores";
    let color = parseInt(ProblemScore) === 100? "QuizScore Green": "QuizScore"

    if(ProblemScore === "100"){
        ScoreDisplay = "Accepted";
    }


    return (
        <div className="ProblemContentStatus">
            <div className = "ProblemContentStatusHeader">
                <span>Problem Information</span>
            </div>
            <div className = {color}>
                <span>{ScoreDisplay}</span>
            </div>
            <div className = "ProblemInfo">
                <table>
                    <tr>
                        <td style={{width: '45%'}}>Added by:</td>
                        <td>Alice</td>
                    </tr>

                    <tr>
                        <td>Date:</td>
                        <td>19/12/2020</td>
                    </tr>

                    <tr>
                        <td>Total Score:</td>
                        <td>100</td>
                    </tr>

                    <tr>
                        <td>Languages:</td>
                        <td>Python</td>
                    </tr>
                </table>
            </div>

            {/* {!ProblemStart &&
            <div className = "ProblemSubmit" onClick = {this.StartProblem.bind(this)}>
                <span>Start</span>
            </div>
            } */}

            {/* {ProblemStart &&
            <div className = "ProblemTimer">
                <span>{min}:{sec}</span>
            </div>
            } */}
        </div>
    );
  }
}
