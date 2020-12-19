import React, { Component } from "react";
import Layout from "../components/Layout";
import LessonList from "../components/LessonList.js";
import LessonContent from "../components/LessonContent.js";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        {/* <News></News>
          {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}

        <LessonList></LessonList>
        <LessonContent></LessonContent>
      </Layout>
    );
  }
}
