import React, { Component } from "react";
import "../css/Quizzes.css";
import Layout from "../components/Layout";
import QuizItem from "../components/QuizItem.js";

import axios from 'axios';

export default class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quizzes: [],
    }
  }


  componentDidMount() {
    this.setState({
      // isLoading: true,
    })
    axios.get(`http://127.0.0.1:8000/api/quizzes/`)
      .then(res => {
        const Quizzes = res.data;
        console.log("debug", Quizzes)
        this.setState({
          Quizzes: Quizzes 
          // isLoading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {Quizzes} = this.state;
    return (
      <Layout>
        <div className="QuizzesBody">
          <div className="QuizzesBodyHeader">
            <span>Practice with Quizzes</span>
          </div>

          {
          Quizzes.map(quiz =><QuizItem Quiz = {quiz}></QuizItem>)
          }
          
        </div>
      </Layout>
    );
  }
}
