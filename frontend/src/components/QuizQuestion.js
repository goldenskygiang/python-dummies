import React, { Component } from "react";
import "../css/QuizQuestion.css";
// import Code from '../imgs/code.PNG'
import Highlight from '../components/Highlight'


export default class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        option: 0
    }
  }

  Clicked(id,QuestionOrd,is_correct){
    this.setState({
        option: id
    })

    let score = is_correct ? 1: 0
    this.props.UpdateScore(QuestionOrd-1, score)
  }

  render() {
    const {Question, QuestionOrd} = this.props
    let option = [
      this.state.option == 1 ? "TickBtn TickBtnClicked" : "TickBtn",
      this.state.option == 2 ? "TickBtn TickBtnClicked" : "TickBtn",
      this.state.option == 3 ? "TickBtn TickBtnClicked" : "TickBtn",
      this.state.option == 4 ? "TickBtn TickBtnClicked" : "TickBtn"
    ]

    const Code = Question.code

    return (
      <div className="QuizQuestion" >
        {/* <span>{name}</span> */}
        <div className = "WordQuestion">
          <span>{QuestionOrd}. {Question.question_text}</span>
        </div>

        {/* <div className = "Code">
            <img className = 'CodeStyle' src = {Code}></img>
        </div> */}

        {Code !== "" &&
          <Highlight language="python">
          {Code}
          </Highlight>
        }

        <div className = "Options">
          {Question.choice_set.map((ans,index) =>
            <div className = "Anser">
                <div className = {option[index]} onClick = {this.Clicked.bind(this,index+1,QuestionOrd,ans.is_correct)}></div>
                <span>{ans.choice_text}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
