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
    const {Comment_set} = this.props;
    // console.log("check comment_set", Comment_set)

    let Date = Comment_set.date;
    Date = Date.split("T");
    // console.log("check date", Date);
    let y = Date[0].split("-")[0];
    let m = Date[0].split("-")[1];
    let d = Date[0].split("-")[2];

    let h = Date[1].split(":")[0];
    let min = Date[1].split(":")[1];
    let s = parseInt(Date[1].split(":")[2]);

    return (
      <div className="Reply">
        {/* <span>{name}</span> */}
        <div className="ReplyLeft"></div>
        <div className="ReplyRight">
          <div className="ReplyRightName">
            <span>{Comment_set.author.username}</span>
            <span className = "CommentDate">{h}:{min} {d}/{m}/{y}</span>
          </div>

          <div className="ReplyComment">
            <span className = "CommentContent">
              {Comment_set.content}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
