import React, { Component } from "react";
import "../css/DiscussionItem.css";
import Reply from "./Reply.js";

import axios from 'axios';

export default class DiscussionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReply: false,
      isShowComments: false,
      value: ""
    }
  }

  showReply(){
    this.setState({
      isReply: !this.state.isReply
    })
  }

  changeStateComments(){
    this.setState({
      isShowComments: !this.state.isShowComments
    })
  }


  UpdateComment(){
    const header = 'Token ' + String(localStorage.token)

    axios.get('http://127.0.0.1:8000/api/comments/', {
      headers: {
        'Authorization': header,
        'Content-Type': `multipart/form-data`
      },
      params: {
        problem_id: this.props.ProblemId
      }
    })
    .then((res) => {
      // console.log("get high score", res.data.score)

      let CommentsList = res.data
      console.log(CommentsList)
      this.setState({
        CommentsList: CommentsList
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
  

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }


  UpdateReply(){
    this.props.UpdateComment()
    this.setState({
      isReply: false,
      isShowComments: true
    })
  }


  PostReply(){
    console.log("Posting Reply");

    let content = this.state.value;
    const header = 'Token ' + String(localStorage.token);

    axios.post(
      "/api/comments/",
      JSON.stringify({
        content: content,
        reply_to: this.props.Comment.id,
      }),
      {
        headers: {
          Authorization: header,
          "Content-Type": "application/json",
        },
      }
    ).then(() =>{
        this.UpdateReply()
      })
  }


  render() {
    const {isReply, isShowComments} = this.state;
    const {Comment} = this.props;
    let Date = Comment.date;
    Date = Date.split("T");
    // console.log("check date", Date);
    let y = Date[0].split("-")[0];
    let m = Date[0].split("-")[1];
    let d = Date[0].split("-")[2];

    let h = Date[1].split(":")[0];
    let min = Date[1].split(":")[1];
    let s = parseInt(Date[1].split(":")[2]);

    // console.log("check time",y,m,d,h,min,s)
    
    return (
      <div className="DiscussionItem">
        {/* <span>{name}</span> */}
        <div className="DiscussionItemLeft"></div>
        <div className="DiscussionItemRight">
          <div className="DiscussionItemRightName">
            <span>{Comment.author.username}</span>
            <span className = "CommentDate">{h}:{min} {d}/{m}/{y}</span>
          </div>

          <div className="DiscussionItemComment">
            <span className = "CommentContent">
              {Comment.content}
            </span>
          </div>

          <div className = "DiscussionItemReply" >
              <div className = "DiscussionShowReply" 
                   onClick = {this.showReply.bind(this)}>Reply</div>

              <div className = "DiscussionShowComments" 
                   onClick = {this.changeStateComments.bind(this)}>Comments ({Comment.comment_set.length})</div>
          </div>

          {isReply && 
            <div>
              <div className = "DiscussionText">
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)}
                          placeholder = "Reply here"></textarea>
              </div>

              <div className = "DiscussionSubmit" onClick = {this.PostReply.bind(this)}>
                  <span>Post</span>
              </div>
            </div>
          }

          {isShowComments &&
          <div>
            {Comment.comment_set.reverse().map((comment_set) =>
              <Reply Comment_set = {comment_set}></Reply>
            )}
          </div>
          }
        </div>
      </div>
    );
  }
}
