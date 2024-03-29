import React, { Component } from "react";
import "../css/QuizContentStatus.css";
import BASE_URL from "../global.js";

import axios from 'axios';
import { string } from "prop-types";

export default class QuizContentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        QuizStart:false,
        time: {}, 
        seconds: 600,
        HighScore: -1 
    }
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  StartQuiz(){
      this.setState({
        QuizStart:true
      })

      this.props.StartQuiz();
      this.startTimer();
  }


  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    // console.log("check Id", this.props.QuizId)

    // console.log("check local storage", localStorage)


    const header = 'Token ' + String(localStorage.token)
    const url = BASE_URL + "/api/quiz_hs/";

    axios.get(url, {
      headers: {
        'Authorization': header,
        'Content-Type': `multipart/form-data`
      },
      params: {
        quiz_id: this.props.QuizId
      }
    })
    .then((res) => {
      // console.log("get high score", res.data.score)

      let HighestScore = res.data.score

      this.setState({
        time: timeLeftVar,
        HighScore: HighestScore
      }, () => {
        this.props.getHighScore(HighestScore)
      });
    })
    .catch((error) => {
      console.error(error)
    })


    this.setState({ time: timeLeftVar });
  }






  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
      this.props.SubmitQuiz();
    }
  }

  render() {
    const {QuizStart, time, HighScore} = this.state;
    let min = time.m < 10 ? "0"+ String(time.m) : String(time.m);
    let sec = time.s < 10? "0"+ String(time.s) : String(time.s);
    let ScoreDisplay = HighScore >= 0 ? String(HighScore) + " / 100" : "No Scores";

    let th = parseInt(0.8*this.props.QuestionLength)  * (100 / this.props.QuestionLength);
    th = parseInt(th);
    // console.log("check th", th)
    let content = HighScore >= th
                                ? String(ScoreDisplay)+" (Passed)"
                                : String(ScoreDisplay)+" (Failed)"
    if(HighScore < 0){
      content = String(ScoreDisplay)
    }

    let color = HighScore >= th
                              ? "QuizScore Green"
                              : "QuizScore Red"

    if(HighScore < 0){
      color = "QuizScore"
    }

    return (
        <div className="QuizContentStatus">
            <div className = "QuizContentStatusHeader">
                <span>Quiz Information</span>
            </div>
            <div className = {color}>
                <span>{content}</span>
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
                <span>{min}:{sec}</span>
            </div>
            }
        </div>
    );
  }
}
