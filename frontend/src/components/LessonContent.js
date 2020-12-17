import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

import "../css/LessonContent.css";

import start_logo_fix from "../imgs/start_logo_fix.png";

export default class LessonContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="LessonContent">
        <div className="LessonName">
          <span> Name of the lesson </span>
          <div className="Logo">
            <img src={start_logo_fix} />
          </div>
        </div>

        <div className="PPTViewer">
          <iframe
            src="https://onedrive.live.com/embed?cid=5A0CD3B83567DE0F&amp;resid=5A0CD3B83567DE0F%21107&amp;authkey=AC7RLG7n35wooTo&amp;em=2&amp;wdAr=1.7777777777777777"
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
        </div>
      </div>
    );
  }
}
