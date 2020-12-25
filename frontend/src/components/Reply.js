import React, { Component } from "react";
import "../css/Reply.css";

export default class Reply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReply: false
    }
  }

  showReply(){
    this.setState({
      isReply: true
    })
  }

  render() {
    // const {name} = this.props
    return (
      <div className="Reply">
        {/* <span>{name}</span> */}
        <div className="ReplyLeft"></div>
        <div className="ReplyRight">
          <div className="ReplyRightName">
            <span>Name</span>
            <span className = "CommentDate">10:26 19/12/2020</span>
          </div>

          <div className="ReplyComment">
            <span className = "CommentContent">
              What is the complexity dude?
            </span>
          </div>
        </div>
      </div>
    );
  }
}
