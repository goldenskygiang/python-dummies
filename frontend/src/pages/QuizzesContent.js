import React, { Component } from "react";
import "../css/QuizzesContent.css";
import Layout from "../components/Layout";
import QuizQuestion from "../components/QuizQuestion.js";
import QuizContentStatus from "../components/QuizContentStatus.js";

export default class QuizzesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuizStart: false
    }
  }

  StartQuiz(){
    this.setState({
      QuizStart: true
    })
  }

  SubmitQuiz(){
    console.log("Submitting...");
  }

  render() {
    const {QuizStart}  = this.state;
    return (
      <Layout>
        <div className="QuizzesContent">
          <div className = "QuizzesContentBody">
            {!QuizStart && <div className = "QuizzesMask"></div>}

            <div className="QuizzesContentBodyHeader">
              <span id="QCHeader">Python Functions Quiz</span>
              <span>
                The quiz contains 13 Questions. Solve 8 correct to pass the test.
              </span>
              <span>
                You will have to read all the given answers and click over the
                correct answer.
              </span>
            </div>

            <QuizQuestion></QuizQuestion>
            <QuizQuestion></QuizQuestion>
            <QuizQuestion></QuizQuestion>

            <div className="QuizzesSummited" onClick = {this.SubmitQuiz.bind(this)}>
              <span>Submit</span>
            </div>
          </div>

          <QuizContentStatus StartQuiz = {this.StartQuiz.bind(this)} SubmitQuiz = {this.SubmitQuiz.bind(this)}/>
        </div>
      </Layout>
    );
  }
}
