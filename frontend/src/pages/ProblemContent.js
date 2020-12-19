import React, { Component } from "react";
import "../css/ProblemContent.css";
import Layout from "../components/Layout";
import ProblemDescription from "../components/ProblemDescription.js";
import ProblemCondition from "../components/ProblemCondition.js";

export default class ProblemContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="ProblemContentBody">
          <ProblemDescription></ProblemDescription>
          {/* <Login></Login> */}
          <ProblemCondition></ProblemCondition>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>
      </Layout>
    );
  }
}
