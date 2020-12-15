import React, { Component } from "react";
import "../css/Homepage.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import LessonList from '../components/LessonList.js';
import LessonContent from '../components/LessonContent.js';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Homepage">
        <div className="HomepageHeader">
          <Navbar></Navbar>
        </div>

        <div className="HomepageBody">
          {/* <News></News>
          {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}

          <LessonList></LessonList>
          <LessonContent></LessonContent>

        </div>

        <div className ="HomepageFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
