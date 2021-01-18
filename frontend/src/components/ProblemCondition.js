import React, { Component } from "react";
import "../css/ProblemCondition.css";
import BASE_URL from "../global.js";

import axios from 'axios';
import SubmissionDetail from "../pages/SubmissionDetail";

export default class ProblemCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
        MaxScore: -1
    }
  }


  componentDidMount(){
    const header = 'Token ' + String(localStorage.token)
    const url = BASE_URL + "/api/submissions/";
    
    axios.get(url, {
      headers: {
        'Authorization': header,
        'Content-Type': `multipart/form-data`
      },
      params: {
        problem_id: this.props.ProblemId
      }
    })
    .then((res) => {
      // console.log("get high score", res.data.score)

      let Submission = res.data;
      console.log("check submission", Submission);

      // if(Submission.length === 0){
      //     Submission = [{score:-1}]
      // }

      let MaxScore = -1;


      for(let sub of Submission){
        // console.log("process here", sub)
        if(sub.score > MaxScore){
          MaxScore = sub.score;
        } 
      }

      this.setState({
          MaxScore: MaxScore
      })

    })
    .catch((error) => {
      console.error(error)
    })
  }

  

  moveToSubmit(problemId){
    window.location.href = '/Submit/'+problemId
  }


  render() {
    const {ProblemItem, ProblemId} = this.props;
    // console.log("view problem", ProblemItem)
    let {MaxScore} = this.state;
    // console.log("check this sub",Submission);
    let content;
    // console.log("maxscore", Submission.maxscore)
    if(parseInt(MaxScore) < 0 ){
        content = "No Scores";
    }
    else content = parseInt(MaxScore) === 100 ? "Accepted"
                                              :String(MaxScore) + " / 100";

    let color = parseInt(MaxScore) === 100? "ProblemScore Green": "ProblemScore";
    
    return (
        <div className="ProblemCondition">
            <div className = "ProblemConditionHeader">
                <span>Problem Information</span>
            </div>
            <div className = {color}>
                <span>{content}</span>
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
