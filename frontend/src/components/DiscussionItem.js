import React, { Component } from "react";
import "../css/DiscussionItem.css";
import Reply from "./Reply.js"

export default class DiscussionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReply: false,
      isShowComments: false
    }
  }

  showReply(){
    this.setState({
      isReply: true
    })
  }

  changeStateComments(){
    this.setState({
      isShowComments: !this.state.isShowComments
    })
  }

  render() {
    const {isReply, isShowComments} = this.state;
    return (
      <div className="DiscussionItem">
        {/* <span>{name}</span> */}
        <div className="DiscussionItemLeft"></div>
        <div className="DiscussionItemRight">
          <div className="DiscussionItemRightName">
            <span>Name</span>
            <span className = "CommentDate">10:26 19/12/2020</span>
          </div>

          <div className="DiscussionItemComment">
            <span className = "CommentContent">
              What is the complexity dude?
            </span>
          </div>

          <div className = "DiscussionItemReply" >
              <div className = "DiscussionShowReply" 
                   onClick = {this.showReply.bind(this)}>Reply</div>

              <div className = "DiscussionShowComments" 
                   onClick = {this.changeStateComments.bind(this)}>Comments (2)</div>
          </div>

          {isReply && 
            <div>
              <div className = "DiscussionText">
                <textarea placeholder = "Reply here"></textarea>
              </div>

              <div className = "DiscussionSubmit">
                  <span>Post</span>
              </div>
            </div>
          }

          {isShowComments &&
          <div>
            <Reply></Reply>
            <Reply></Reply> 
          </div>
          }
        </div>
      </div>
    );
  }
}
