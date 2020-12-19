import React, { Component } from "react";
import "../css/Quizzes.css";
import Layout from "../components/Layout";
import QuizItem from "../components/QuizItem.js";

export default class Quizzes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="QuizzesBody">
          <div className="QuizzesBodyHeader">
            <span>This is quizzes header</span>
          </div>

          <QuizItem></QuizItem>
          <QuizItem></QuizItem>
          <QuizItem></QuizItem>
        </div>
      </Layout>
    );
  }
}
