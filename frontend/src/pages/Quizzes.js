import React, { Component } from "react";
import "../css/Quizzes.css";
import Layout from "../components/Layout";
import QuizItem from "../components/QuizItem.js";

import axios from 'axios';

export default class Quizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
    }
  }


  componentDidMount() {
    this.setState({
      // isLoading: true,
    })
    axios.get(`http://127.0.0.1:8000/api/quizzes/`)
      .then(res => {
        const quizzes = res.data;
        console.log("debug", quizzes)
        this.setState({
          quizzes: quizzes 
          // isLoading: false
        });
      })
      .catch(error => console.log(error));
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
