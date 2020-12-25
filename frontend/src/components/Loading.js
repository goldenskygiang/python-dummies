import React, { Component } from "react";
import "../css/Loading.css";

export default class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LoadingWrapper">
        <div className="loadingCover"></div>
        <div className="loader"></div>
      </div>
    );
  }
}
