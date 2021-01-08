import React, { Component } from "react";
import "../css/ProblemContent.css";
import Layout from "../components/Layout";
import ProblemDescription from "../components/ProblemDescription.js";
import ProblemCondition from "../components/ProblemCondition.js";

import axios from 'axios';


export default class ProblemContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProblemItem: {},
      ProblemCategory: ""
    }
  }

  componentDidMount() {
    console.log("check here")
    console.log("debug Id", this.props.match.params.id)
    const url = "/api/problems/" + String(this.props.match.params.id);
    axios
      .get(url)
      .then((res) => {
        const ProblemItem = res.data;
        // console.log("debug", ProblemItem);

        const ProblemCategory = ProblemItem.lesson.title;


        this.setState({
          ProblemItem: ProblemItem,
          ProblemCategory: ProblemCategory
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {ProblemItem, ProblemCategory} = this.state;
    return (
      <Layout>
        <div className="ProblemContentBody">
          <ProblemDescription ProblemItem = {ProblemItem} ProblemCategory = {ProblemCategory}></ProblemDescription>
          {/* <Login></Login> */}
          <ProblemCondition></ProblemCondition>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>
      </Layout>
    );
  }
}
