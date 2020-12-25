import React, { Component } from "react";
import Layout from "../components/Layout";
import LessonList from "../components/LessonList.js";
import LessonContent from "../components/LessonContent.js";
import Loading from '../components/Loading.js';

import axios from 'axios';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [],
      emb_url: "",
      LessonName:"",
      // isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({
      // isLoading: true,
    })
    axios.get(`http://127.0.0.1:8000/api/lessons/`)
      .then(res => {
        const lessons = res.data;
        // console.log("debug", lessons)
        this.setState({
          lessons: lessons,
          emb_url: lessons[0].embed_url,
          LessonName: lessons[0].title,
          // isLoading: false
        });
      })
      .catch(error => console.log(error));
  }


  setContent(url, lsname){
    this.setState({
      emb_url: url,
      LessonName: lsname,
    })
  }

  render() {
    const {lessons, emb_url, LessonName} = this.state;
    return (
      <Layout>
        {/* <News></News>
          {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        {/* {this.state.isLoading && <Loading />} */}

        <LessonList Lessons = {lessons} setContent = {this.setContent.bind(this)}></LessonList>
        {/* <LessonList Lessons = {lessons}></LessonList> */}
        <LessonContent LessonName = {LessonName} Emb_url = {emb_url}></LessonContent>
        {/* <LessonContent LessonName = {lessons.title}></LessonContent> */}
      </Layout>
    );
  }
}
