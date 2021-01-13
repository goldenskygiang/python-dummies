import React, { Component } from "react";
import BASE_URL from "../global.js";

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
      ProblemCategory: "",
      ProblemId: this.props.match.params.id
    }
  }

  componentDidMount() {
    // console.log("check here")
    // console.log("debug Id from Problem Content", this.props.match.params.id)
    const url = BASE_URL + "/api/problems/" + String(this.props.match.params.id);
    axios
      .get(url)
      .then((res) => {
        const ProblemItem = res.data;
        // console.log("debug", ProblemItem);

        const ProblemCategory = ProblemItem.lesson.title;
        const ProblemId = ProblemItem.id;


        this.setState({
          ProblemItem: ProblemItem,
          ProblemCategory: ProblemCategory,
          ProblemId: ProblemId
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {ProblemItem, ProblemCategory, ProblemId} = this.state;

    return (
      <Layout>
        <div className="ProblemContentBody">
          <ProblemDescription ProblemItem = {ProblemItem} 
                              ProblemCategory = {ProblemCategory}
                              ProblemId = {ProblemId}></ProblemDescription>
          {/* <Login></Login> */}
          <ProblemCondition ProblemItem = {ProblemItem}
                            ProblemId = {ProblemId}></ProblemCondition>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>
      </Layout>
    );
  }
}
