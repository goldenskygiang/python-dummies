import React, { Component } from "react";
import "../css/LessonItem.css";
import Loading from "../components/Loading.js";

export default class LessonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      // isActive: false
    };
  }

  // async updateContent(url, lsname){
  //   await this.props.setContent(url, lsname)
  // }

  setContent(url, lsname, lsid) {
    // console.log("setting content...");
    this.props.setContent(url, lsname, lsid);
  }

  render() {
    const { Lesson, setContent, LessonId, onClick } = this.props;
    let Class =
      Lesson.id === LessonId ? "LessonItem LessonItemActive" : "LessonItem";
    return (
      <div
        className={Class}
        onClick={() => {
          setContent.bind(this, Lesson.embed_url, Lesson.title, Lesson.id)();
          onClick();
        }}
      >
        <Loading isLoading={this.state.isLoading} />
        <span>{Lesson.title}</span>
      </div>
    );
  }
}
