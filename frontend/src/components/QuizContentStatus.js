import React, { Component } from "react";
import "../css/QuizContentStatus.css";

export default class QuizContentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        QuizStart:false
    }
  }

  StartQuiz(){
      this.setState({
        QuizStart:true
      })

      this.props.StartQuiz();
  }

  render() {
    const {QuizStart} = this.state;
    return (
        <div className="QuizContentStatus">
            <div className = "QuizContentStatusHeader">
                <span>Quiz Information</span>
            </div>
            <div className = "QuizScore">
                <span>No Scores</span>
            </div>
            <div className = "QuizInfo">
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

            {!QuizStart &&
            <div className = "QuizSubmit" onClick = {this.StartQuiz.bind(this)}>
                <span>Start</span>
            </div>
            }

            {QuizStart &&
            <div className = "QuizTimer">
                <span>10:00</span>
            </div>
            }
        </div>
    );
  }
}
