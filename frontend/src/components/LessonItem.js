import React, { Component } from "react";
import "../css/LessonItem.css";
import Loading from '../components/Loading.js';

export default class LessonItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  async updateContent(url, lsname){
    await this.props.setContent(url, lsname)
  }

  setContent(url, lsname){
    this.setState({
      isLoading:true
    })

    console.log("setting content...")
    // this.props.setContent(url, lsname)
    this.updateContent(url, lsname).then(
      () => {
        this.setState({
          isLoading:false
        })
      }
    )
    // this.setState({
    //   isLoading:false
    // })
  }

  render() {
    const { Lesson, setContent } = this.props;
    // let class = 
    return (
      <div className="LessonItem" onClick = {this.setContent.bind(this, Lesson.embed_url, Lesson.title)}>
        {this.state.isLoading && <Loading />}
        <span>{Lesson.title}</span>
      </div>
    );
  }
}
