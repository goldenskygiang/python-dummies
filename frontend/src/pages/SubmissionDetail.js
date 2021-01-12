import React, { Component } from "react";
import "../css/SubmissionDetail.css";
import Layout from "../components/Layout";
import SubmitResult from '../components/SubmitResult.js';
import Profile from '../components/Profile.js';
import ProblemContentStatus from "../components/ProblemContentStatus";

export default class SubmissionDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
      console.log("Accessed")
  }

  render(){
    return (
      <Layout>

        <div className="SubmissionDetailBody">
          <Profile></Profile>
          <SubmitResult></SubmitResult>
          <ProblemContentStatus></ProblemContentStatus>
        </div>

      </Layout>
    );
  }
}
