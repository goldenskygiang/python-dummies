import React, { Component } from "react";
import "../css/LessonList.css";
import LessonItem from "../components/LessonItem.js";

export default class LessonList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LessonList">
        <div className="LessonListHeader">
          <span>Lessons</span>
        </div>

        <div className="LessonListBody">
          <LessonItem name="Lesson 1"></LessonItem>
          <LessonItem name="Lesson 2"></LessonItem>
          <LessonItem name="Lesson 3"></LessonItem>
        </div>
      </div>
    );
  }
}
