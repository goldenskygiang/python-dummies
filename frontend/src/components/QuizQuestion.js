import React, { Component } from "react";
import "../css/QuizQuestion.css";
// import Code from '../imgs/code.PNG'
import Highlight from '../components/Highlight'

const Code = `\
print("Hello World")
`

export default class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        option: 0
    }
  }

  Clicked(id){
      this.setState({
          option: id
      })
  }

  render() {
    // const {name} = this.props
    let option_1 = this.state.option == 1 ? "TickBtn TickBtnClicked" : "TickBtn";
    let option_2 = this.state.option == 2 ? "TickBtn TickBtnClicked" : "TickBtn";
    let option_3 = this.state.option == 3 ? "TickBtn TickBtnClicked" : "TickBtn";
    let option_4 = this.state.option == 4 ? "TickBtn TickBtnClicked" : "TickBtn";

    return (
      <div className="QuizQuestion" >
        {/* <span>{name}</span> */}
        <div className = "WordQuestion">
            <span>1. What is the output of the following display() function call</span>
        </div>

        {/* <div className = "Code">
            <img className = 'CodeStyle' src = {Code}></img>
        </div> */}
        <Highlight language="python">
          {Code}
        </Highlight>

        <div className = "Options">
            <div className = "Anser">
                <div className = {option_1} onClick = {this.Clicked.bind(this,1)}></div>
                <span>This is answer 1</span>
            </div>

            <div className = "Anser">
                <div className = {option_2} onClick = {this.Clicked.bind(this,2)}></div>
                <span>This is answer 2</span>
            </div>

            <div className = "Anser">
                <div className = {option_3} onClick = {this.Clicked.bind(this,3)}></div>
                <span>This is answer 3</span>
            </div>

            <div className = "Anser">
                <div className = {option_4} onClick = {this.Clicked.bind(this,4)}></div>
                <span>This is answer 4</span>
            </div>
        </div>
      </div>
    );
  }
}
