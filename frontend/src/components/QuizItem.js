import React, { Component } from "react";
import "../css/QuizItem.css";

export default class QuizItem extends Component {
  constructor(props) {
    super(props);
  }

  redirect(id){
    window.location.href = '/Quizzes/' + id
  }

  render() {
    const {Quiz} = this.props
    return (
      <div className="QuizItem" onClick = {this.redirect.bind(this,Quiz.id)}>
        {/* <span>{name}</span> */}
        <div className="ItemLeft"></div>
        <div className="ItemRight">
          <div className="ItemRightName">
            <span>{Quiz.title}</span>
          </div>
          <div className="QuizItemDescription">
            <span>
              {Quiz.description}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
