import React, { Component } from "react";
import "../css/QuizzesContent.css";
import Layout from "../components/Layout";
import QuizQuestion from "../components/QuizQuestion.js";
import QuizContentStatus from "../components/QuizContentStatus.js";

import axios from "axios";

export default class QuizzesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuizStart: false,
      QuestionSet: [],
      Points: [],
      HighestScore: -1,
    };
  }

  componentDidMount() {
    // console.log("url id",this.props.match.params)

    // this.setState({
    //   // isLoading: true,
    // })
    const url = "/api/quizzes/" + String(this.props.match.params.id);
    axios
      .get(url)
      .then((res) => {
        const QuizItem = res.data;
        console.log("debug", QuizItem);

        let QS = QuizItem.question_set;

        var i;
        let tmp = [];

        for (i = 0; i < QS.length; i++) {
          tmp[i] = 0;
        }

        // console.log("test point", tmp)
        this.setState({
          QuestionSet: QS,
          Points: tmp,
          // isLoading: false
        });
      })
      .catch((error) => console.log(error));
  }

  getHighScore(Score) {
    this.setState({
      HighestScore: Score,
    });
  }

  StartQuiz() {
    this.setState({
      QuizStart: true,
    });
  }

  UpdateScore(index, score) {
    let tmp = this.state.Points;
    tmp[index] = score;

    console.log("debug score process", tmp);

    this.setState({
      Points: tmp,
    });
  }

  SubmitQuiz() {
    console.log("Submitting...");

    var sum = 0;
    var i;

    let Res = this.state.Points;

    let Mul = 100 / Res.length;

    for (i = 0; i < Res.length; i++) {
      sum = sum + Res[i] * Mul;
    }

    // console.log("check sum", sum)

    const Result =
      sum > this.state.HighestScore ? sum : this.state.HighestScore;

    console.log("Debug Result", Result);
    const header = 'Token ' + String(localStorage.token)

    axios.post(
      "/api/quiz_hs/",
      JSON.stringify({
        score: Result,
        quiz_id: this.props.match.params.id,
      }),
      {
        headers: {
          Authorization: header,
          "Content-Type": "application/json",
        },
      }
    );

    window.location.href = '/Quizzes/' + this.props.match.params.id;
  }

  render() {
    const { QuizStart, QuestionSet } = this.state;
    return (
      <Layout>
        <div className="QuizzesContent">
          <div className="QuizzesContentBody">
            {!QuizStart && <div className="QuizzesMask"></div>}

            <div className="QuizzesContentBodyHeader">
              <span id="QCHeader">Python Functions Quiz</span>
              <span>
                The quiz contains 13 Questions. Solve 8 correct to pass the
                test.
              </span>
              <span>
                You will have to read all the given answers and click over the
                correct answer.
              </span>
            </div>

            {QuizStart && QuestionSet.map((question, index) => (
              <QuizQuestion
                Question={question}
                QuestionOrd={index + 1}
                UpdateScore={this.UpdateScore.bind(this)}
              ></QuizQuestion>
            ))}

            <div
              className="QuizzesSummited"
              onClick={this.SubmitQuiz.bind(this)}
            >
              <span>Submit</span>
            </div>
          </div>

          <QuizContentStatus
            StartQuiz={this.StartQuiz.bind(this)}
            SubmitQuiz={this.SubmitQuiz.bind(this)}
            getHighScore={this.getHighScore.bind(this)}
            QuizId={this.props.match.params.id}
          />
        </div>
      </Layout>
    );
  }
}
