import React, { Component } from "react";
import "../css/TestResult.css";

export default class TestResult extends Component {
  constructor(props) {
    super(props);
  }

//   redirect(id){
//     window.location.href = '/Quizzes/' + id
//   }

  render() {
    let {idx,Result} = this.props;
    let color_1, color_2, content;
    let running_time = localStorage.time.split(",");
    
    if(Result === "AC"){
        color_1 = "TestResultItem Correct";
        color_2 = "AC";
        content = "Output is correct";
        Result = "Accepted";
    }
    else if(Result === "WA"){
        color_1 = "TestResultItem Incorrect";
        color_2 = "WA";
        content = "Output is incorrect";
        Result = "Wrong Answer";
    }
    else if(Result === "TLE"){
        color_1 = "TestResultItem TimeLimit";
        color_2 = "TLE";
        Result = "TLE";
        content = "Time Limit Exceeded";
    }
    else{
        color_1 = "TestResultItem Runtime";
        color_2 = "RTE";
        Result = "RTE";
        content = "Runtime Error";
    }

    return (
      <div className={color_1}>
        {/* <span>{name}</span> */}
        <div className="TestResultItemRight">
          <div className="TestResultItemUp">
            <span>Test #{idx + 1}: <span className = {color_2}>{Result}</span>. Running Time: {parseFloat(running_time[idx]).toFixed(6)}s</span>
          </div>
          <div className="TestResultItemDown">
            <span>
                {content}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
