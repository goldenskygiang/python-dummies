import React, { Component } from "react";
import "../css/SubmissionDetail.css";
import Layout from "../components/Layout";
import SubmitResult from '../components/SubmitResult.js';
import Profile from '../components/Profile.js';

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
          <SubmitResult></SubmitResult>
          {/* <Login></Login> */}
          <Profile></Profile>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>

      </Layout>
    );
  }
}
