import React, { Component } from "react";
import "../css/ProblemCondition.css";

import axios from 'axios';

export default class ProblemCondition extends Component {
  constructor(props) {
    super(props);
  }
  

  moveToSubmit(problemId){
    window.location.href = '/Submit/'+problemId
  }

  render() {
    const {ProblemItem} = this.props
    return (
        <div className="ProblemCondition">
            <div className = "ProblemConditionHeader">
                <span>Problem Information</span>
            </div>
            <div className = "ProblemScore">
                <span>No Scores</span>
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

            <div className = "ProblemSubmit" onClick = {this.moveToSubmit.bind(this,ProblemItem.id)}>
                <span>Submit</span>
            </div>
        </div>
    );
  }
}
