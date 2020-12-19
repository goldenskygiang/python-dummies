import React, { Component } from "react";
import "../css/QuizzesContent.css";
import Layout from "../components/Layout";
import QuizQuestion from "../components/QuizQuestion.js";

export default class QuizzesContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="QuizzesContentBody">
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

          <div className="Summited">
            <span>Submit</span>
          </div>
        </div>
      </Layout>
    );
  }
}
