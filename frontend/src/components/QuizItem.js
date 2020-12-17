import React, { Component } from "react";
import "../css/QuizItem.css";

export default class QuizItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {name} = this.props
    return (
      <div className="QuizItem">
        {/* <span>{name}</span> */}
        <div className="ItemLeft"></div>
        <div className="ItemRight">
          <div className="ItemRightName">
            <span>Lesson 1 Quiz</span>
          </div>
          <div className="QuizItemDescription">
            <span>
              This will be the description. This will be the description.This
              will be the description. This will be the description. This will
              be the description. This will be the description.This will be the
              description. This will be the description.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
