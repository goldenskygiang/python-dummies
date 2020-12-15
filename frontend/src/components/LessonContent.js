import React, { Component } from "react";
import "../css/LessonContent.css";
import {
    Presentation, Slide, Text,
    Shape, Image, render
} from "react-pptx";
import fs from "fs";

export default class LessonContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="LessonContent">
        <h1>Lesson Content</h1>
        <iframe src="https://vinuniversity-my.sharepoint.com/personal/20giang_vt_vinuni_edu_vn/_layouts/15/Doc.aspx?sourcedoc={f8001601-5c07-44d6-9d91-0faca5824c3c}&action=embedview&wdAr=1.7781512605042016" width="962px" height="565px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
        
        </div>
    );
  }
}
