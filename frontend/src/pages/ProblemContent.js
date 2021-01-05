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
      ProblemItem: {}
    }
  }

  componentDidMount() {
    // console.log("debug Id", this.props.match.params.id)
    const url = "/api/problems/" + String(this.props.match.params.id);
    axios
      .get(url)
      .then((res) => {
        const ProblemItem = res.data;
        console.log("debug", ProblemItem);


        this.setState({
          ProblemItem: ProblemItem,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {ProblemItem} = this.state;
    return (
      <Layout>
        <div className="ProblemContentBody">
          <ProblemDescription ProblemItem = {ProblemItem}></ProblemDescription>
          {/* <Login></Login> */}
          <ProblemCondition></ProblemCondition>
          {/* {!localStorage.getItem('user') && <Login></Login>}
          {localStorage.getItem('user') &&  <Profile></Profile>} */}
        </div>
      </Layout>
    );
  }
}
