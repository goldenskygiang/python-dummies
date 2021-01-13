import React, { Component } from "react";
import BASE_URL from "../global.js";
import "../css/QuizzesContent.css";
import Layout from "../components/Layout";
import QuizQuestion from "../components/QuizQuestion.js";
import QuizContentStatus from "../components/QuizContentStatus.js";

import axios from "axios";

export default class QuizzesContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuizItem: {},
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
    const url = BASE_URL + "/api/quizzes/" + String(this.props.match.params.id);
    axios
      .get(url)
      .then((res) => {
        const QuizItem = res.data;
        // console.log("debug", QuizItem);

        let QS = QuizItem.question_set;

        var i;
        let tmp = [];

        for (i = 0; i < QS.length; i++) {
          tmp[i] = 0;
        }

        // console.log("test point", tmp)
        this.setState({
          QuizItem: QuizItem,
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

    // console.log("debug score process", tmp);

    this.setState({
      Points: tmp,
    });
  }

  updateTotalScore(header){
    const url = BASE_URL + "/api/users";
    axios.get(url, {
      headers: {
        'Authorization': header,
        'Content-Type': `multipart/form-data`
      }
    })
    .then((res) => {
      // console.log("get high score", res.data.score)
      const TotalScore = res.data.score;

      localStorage.setItem("TotalScore", TotalScore);

      window.location.href = '/Quizzes/' + this.props.match.params.id;


    })
    .catch((error) => {
      console.error(error)
    })
  }


  SubmitQuiz() {
    // console.log("Submitting...");

    let sum = 0;
    var i;

    let Res = this.state.Points;

    let Mul = 100 / Res.length;
    // console.log("check Mul", Mul)

    for (i = 0; i < Res.length; i++) {
      sum = sum + Res[i] * Mul;
    }

    // console.log("check sum", sum)

    // const Result =
    //   sum > this.state.HighestScore ? sum : this.state.HighestScore;
    let Result = 0;

    if(sum > this.state.HighestScore){
      Result = sum;
    }
    else{
      Result = this.state.HighestScore;
    }

    // console.log("Debug Result", Result);
    const header = 'Token ' + String(localStorage.token)
    const url = BASE_URL + "/api/quiz_hs/";


    axios.post(
      url,
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
    ).then(() =>{
        this.updateTotalScore(header)
      })
  }

  render() {
    const {QuizItem, QuizStart, QuestionSet } = this.state;
    return (
      <Layout>
        <div className="QuizzesContent">
          <div className="QuizzesContentBody">
            {!QuizStart && <div className="QuizzesMask"></div>}

            <div className="QuizzesContentBodyHeader">
              <span id="QCHeader">{QuizItem.title}</span>
              <span>
                The quiz contains {QuestionSet.length} Questions. Solve {parseInt(0.8 * QuestionSet.length) } correct to pass the
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
            QuestionLength = {QuestionSet.length}
          />
        </div>
      </Layout>
    );
  }
}
