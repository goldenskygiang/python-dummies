import React, { Component } from "react";
import "../css/Quizzes.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import QuizItem from '../components/QuizItem.js';
// import LessonList from '../components/LessonList.js';
// import LessonContent from '../components/LessonContent.js';

export default class Quizzes extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Quizzes">
        <div className="QuizzesHeader">
          <Navbar></Navbar>
        </div>

        <div className="QuizzesBody">
          <div className="QuizzesBodyHeader">
            <span>This is quizzes header</span>
          </div>

          <QuizItem></QuizItem>
          <QuizItem></QuizItem>
          <QuizItem></QuizItem>

        </div>

        <div className ="QuizzesFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
