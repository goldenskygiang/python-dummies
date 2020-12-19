import React, { Component } from "react";
import "../css/Problemset.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer.js';
import Problemlist from '../components/Problemlist.js';
import Profile from '../components/Profile.js';

export default class Problemset extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Problemset">
        <div className="ProblemsetHeader">
          <Navbar></Navbar>
        </div>

        <div className="ProblemsetBody">
          <Problemlist></Problemlist>
          {/* <Login></Login> */}
          <Profile></Profile>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>

        <div className ="ProblemsetFooter">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
