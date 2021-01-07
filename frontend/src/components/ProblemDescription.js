import React, { Component } from "react";
import "../css/ProblemDescription.css";
import Discussion from "./Discussion.js"


export default class ProblemDescription extends Component {
  constructor(props) {
    super(props);
  }




  moveToSubmit(problemId){
    window.location.href = '/Submit/'+problemId
  }



  render() {
    const {ProblemItem, ProblemCategory} = this.props;
    // const ProblemCategory = ProblemItem.lesson;
    // console.log("debug ProbItem", ProblemCategory);
    return (
      <div className="ProblemDescription">
            <div className = "ProblemName">
              <span>{ProblemItem.title}</span>
              <span className = 'ProblemCate'># {ProblemCategory} </span>
            </div>

            <div className = "Problem-words">
                {ProblemItem.description}
            </div>

            <div className = "ProblemInput-Output">
              <span className = "big">Input</span>
              <p>{ProblemItem.input_guide}</p>
            </div>

            <div className = "ProblemInput-Output">
              <span className = "big">Output</span>
              <p>{ProblemItem.output_guide}</p>
            </div>

            <div className = "ProblemExamples">
<pre>
Input:
<br></br>
<br></br>
{ProblemItem.sample_input}
<br></br>
<br></br>
<br></br>
<br></br>
Output:
<br></br>
<br></br>
{ProblemItem.sample_output}
</pre>
            </div>

            <div className = "ProblemDescriptionSubmit" onClick = {this.moveToSubmit.bind(this,'P001')}>
                <span>Submit</span>
            </div>

            <Discussion></Discussion>

      </div>
    );
  }
}
