import React, { Component } from "react";
import "../css/QuizContentStatus.css";

import axios from 'axios';

export default class QuizContentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        QuizStart:false,
        time: {}, 
        seconds: 600 
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
    console.log("check Id", this.props.QuizId)

    axios.get('http://127.0.0.1:8000/api/quiz_hs', {
      headers: {
        'Authorization': `Token 896fa8b8fe999c94053318a889b21390a6ee4d80`,
        'Content-Type': `multipart/form-data`
      },
      data: {
        quiz_id: this.props.QuizId
      }
    })
    .then((res) => {
      console.log("get high score", res.data)
      this.setState({
        time: timeLeftVar
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
    const {QuizStart, time} = this.state;
    let min = time.m < 10 ? "0"+ String(time.m) : String(time.m);
    let sec = time.s < 10? "0"+ String(time.s) : String(time.s);

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
                <span>{min}:{sec}</span>
            </div>
            }
        </div>
    );
  }
}
