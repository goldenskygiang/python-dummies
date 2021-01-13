import React, { Component } from "react";
import "../css/Discussion.css";
import DiscussionItem from "./DiscussionItem.js";

import axios from 'axios';

export default class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CommentsList:[],
      value: ""
    }
  }


  componentDidMount() {
    // console.log("check id in discussion", this.props.ProblemId)
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
      // console.log(CommentsList)
      this.setState({
        CommentsList: CommentsList
      })
    })
    .catch((error) => {
      console.error(error)
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
      // console.log(CommentsList)
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


  PostComment(){
    // console.log("Posting comment");

    let content = this.state.value;
    const header = 'Token ' + String(localStorage.token);

    axios.post(
      "/api/comments/",
      JSON.stringify({
        content: content,
        problem_id: this.props.ProblemId,
      }),
      {
        headers: {
          Authorization: header,
          "Content-Type": "application/json",
        },
      }
    ).then(() =>{
        this.UpdateComment()
      })
  }


  render() {
    const {CommentsList} = this.state;
    // console.log("debug cml", CommentsList)
    return (
      <div className="Discussion">
        <div className = "DiscussionHeader">
            <span>Discussion</span>
            <div className = "DiscussionText">
                <textarea value={this.state.value} onChange={this.handleChange.bind(this)}
                          placeholder = "Leave your comment here"></textarea>
            </div>

            <div className = "DiscussionSubmit" onClick = {this.PostComment.bind(this)}>
                <span>Post</span>
            </div>

            <div className = "DiscussionList">
                {CommentsList.reverse().map((comment) => 
                  <DiscussionItem Comment = {comment} 
                                  UpdateComment = {this.UpdateComment.bind(this)}></DiscussionItem>
                )}
                {/* <DiscussionItem></DiscussionItem>
                <DiscussionItem></DiscussionItem>
                <DiscussionItem></DiscussionItem> */}
            </div>

        </div>
      </div>
    );
  }
}
