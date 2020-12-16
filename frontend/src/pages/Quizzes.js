import React, { Component } from "react";
import "../css/Quizzes.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
// import LessonList from '../components/LessonList.js';
// import LessonContent from '../components/LessonContent.js';

export default class Homepage extends Component {
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
          {/* <News></News>
          {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}

          {/* <LessonList></LessonList>
          <LessonContent></LessonContent> */}

        </div>

        <div className ="QuizzesFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
