import React, { Component } from "react";

import "../css/LessonContent.css";

import start_logo_fix from "../imgs/start_logo_fix.png";
import Iframe from 'react-iframe'

export default class LessonContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // console.log("debug",this.props.Emb_url)
  }

  render() {
    const{LessonName, Emb_url} = this.props
    // console.log(Emb_url);

    return (
      <div className="LessonContent">
        <div className="LessonName">
          {/* <span> {LessonName} </span> */}
          <div className="Logo">
            <img src={start_logo_fix} alt="start_logo" />
          </div>
          <span> {LessonName} </span>
        </div>

        <div className="PPTViewer" dangerouslySetInnerHTML={{__html: String(this.props.Emb_url)}}>
          {/* {Emb_url !== "" &&
            // <Iframe url={String(this.props.Emb_url)}
            //         width="450px"
            //         height="450px"
            //         id="myId"
            //         className="myClassname"
            //         display="initial"
            //         position="relative"/>
            // <iframe src= {String(this.props.Emb_url)} width={"100%"} height={"100%"} frameBorder={"0"}>This is an embedded<a target="_blank" href="https://office.com">Microsoft Office</a>presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
          } */}
        </div>
      </div>
    );
  }
}
