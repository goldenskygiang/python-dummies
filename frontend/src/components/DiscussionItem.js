import React, { Component } from "react";
import "../css/DiscussionItem.css";

export default class DiscussionItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // const {name} = this.props
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

          <div className = "DiscusstionItemReply">
              <span>Reply</span>
          </div>
        </div>
      </div>
    );
  }
}
