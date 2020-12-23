import React, { Component } from "react";
import Layout from "../components/Layout";
import LessonList from "../components/LessonList.js";
import LessonContent from "../components/LessonContent.js";

import axios from 'axios';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    axios.get(`http://c45573a9a3d3.ngrok.io/api/lessons/`)
      .then(res => {
        const lessons = res.data;
        console.log("debug", lessons)
        this.setState({ lessons: lessons });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {lessons} = this.state;
    return (
      <Layout>
        {/* <News></News>
          {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}

        <LessonList Lessons = {lessons}></LessonList>
        <LessonContent Lessons = {lessons}></LessonContent>
      </Layout>
    );
  }
}
