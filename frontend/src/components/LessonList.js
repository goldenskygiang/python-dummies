import React, { Component } from "react";
import "../css/LessonList.css";
import LessonItem from "../components/LessonItem.js";

import { isEmpty } from "lodash";

export default class LessonList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  setContent() {
    // console.log("setting content...");
  }

  render() {
    const { Lessons = [], setContent, LessonId } = this.props;
    // console.log(Lessons);
    return (
      <div className="LessonList">
        <div className="LessonListHeader">
          <span>Lessons</span>
        </div>

        <div className="LessonListBody">
          {isEmpty(Lessons) ? (
            <></>
          ) : (
            Lessons.map((lesson) => (
              <LessonItem
                Lesson={lesson}
                setContent={setContent}
                LessonId={LessonId}
              ></LessonItem>
            ))
          )}
        </div>
      </div>
    );
  }
}
