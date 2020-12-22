import React, { Component } from "react";
import "../css/ProfileDetail.css";
import Layout from "../components/Layout";
import Profile from "../components/Profile.js";
// import InsideRanking from "../components/InsideRanking.js";
import InsideProfileDetail from "../components/InsideProfileDetail.js";

export default class ProfileDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="ProfileDetailBody">
          <InsideProfileDetail match={this.props.match}></InsideProfileDetail>
          {/* {localStorage.getItem('user') &&  <Profile></Profile>} */}
          <Profile></Profile>
        </div>
      </Layout>
    );
  }
}
