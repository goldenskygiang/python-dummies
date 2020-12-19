import React, { Component } from "react";
import "../css/Discussion.css";
import DiscussionItem from "./DiscussionItem.js";

export default class Discussion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Discussion">
        <div className = "DiscussionHeader">
            <span>Discussion</span>
            <div className = "DiscussionText">
                <textarea placeholder = "Leave your comment here"></textarea>
            </div>

            <div className = "DiscussionSubmit">
                <span>Post</span>
            </div>

            <div className = "DiscussionList">
                <DiscussionItem></DiscussionItem>
                <DiscussionItem></DiscussionItem>
                <DiscussionItem></DiscussionItem>
            </div>

        </div>
      </div>
    );
  }
}
