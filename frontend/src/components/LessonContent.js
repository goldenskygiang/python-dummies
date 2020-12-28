import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "../css/LessonContent.css";

import start_logo_fix from "../imgs/start_logo_fix.png";

export default class LessonContent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("debug",this.props.Emb_url)
  }

  render() {
    const{LessonName, Emb_url} = this.props
    return (
      <div className="LessonContent">
        <div className="LessonName">
          {/* <span> {LessonName} </span> */}
          <div className="Logo">
            <img src={start_logo_fix} />
          </div>
          <span> {LessonName} </span>
        </div>

        <div className="PPTViewer">
          {Emb_url !== "" &&
            <iframe
              src= {this.props.Emb_url}
              // src = "https://onedrive.live.com/embed?resid=5D9E5867640F822D%21228458&amp;authkey=%21APtyxMbOlbc7idM&amp;em=2&amp;wdAr=1.7777777777777777"
              width={"100%"}
              height={"100%"}
              frameBorder={"0"}
            >
              This is an embedded{" "}
              <a target="_blank" href="https://office.com">
                Microsoft Office
              </a>{" "}
              presentation, powered by{" "}
              <a target="_blank" href="https://office.com/webapps">
                Office
              </a>
              .
            </iframe>
          }
        </div>
      </div>
    );
  }
}
