import React, { Component } from "react";
import "../css/QuizQuestion.css";
import Code from '../imgs/code.PNG'

export default class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const {name} = this.props
    return (
      <div className="QuizQuestion" >
        {/* <span>{name}</span> */}
        <div className = "WordQuestion">
            <span>1. What is the output of the following display() function call</span>
        </div>

        <div className = "Code">
            <img className = 'CodeStyle' src = {Code}></img>
        </div>

        <div className = "Options">
            <div className = "Anser">
                <div className = "TickBtn"></div>
                <span>This is answer 1</span>
            </div>

            <div className = "Anser">
                <div className = "TickBtn"></div>
                <span>This is answer 2</span>
            </div>

            <div className = "Anser">
                <div className = "TickBtn"></div>
                <span>This is answer 3</span>
            </div>

            <div className = "Anser">
                <div className = "TickBtn"></div>
                <span>This is answer 4</span>
            </div>
        </div>
      </div>
    );
  }
}
