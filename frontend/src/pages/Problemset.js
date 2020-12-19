import React, { Component } from "react";
import "../css/Problemset.css";
import Layout from "../components/Layout";
import Problemlist from '../components/Problemlist.js';
import Profile from '../components/Profile.js';

export default class Problemset extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Layout>

        <div className="ProblemsetBody">
          <Problemlist></Problemlist>
          {/* <Login></Login> */}
          <Profile></Profile>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>

      </Layout>
    );
  }
}
