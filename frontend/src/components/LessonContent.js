import React, { Component } from "react";

import "../css/LessonContent.css";

import start_logo_fix from "../imgs/start_logo_fix.png";
import { ClapSpinner as Loader } from "react-spinners-kit";
import Iframe from "react-iframe";

export default class LessonContent extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // console.log("debug",this.props.Emb_url)
  }

  render() {
    const { LessonName, Emb_url } = this.props;

    return (
      <div className="LessonContent">
        <div className="LessonName">
          {/* <span> {LessonName} </span> */}
          <div className="Logo">
            <img src={start_logo_fix} alt="start_logo" />
          </div>
          <span> {LessonName} </span>
        </div>

        <div className="PPTViewer" dangerouslySetInnerHTML={{__html: String(Emb_url)}}></div>
        {/* {Emb_url !== "" && (
          <div className="PPTViewer">
            <Iframe
              url="https://onedrive.live.com/embed?cid=5A0CD3B83567DE0F&amp;resid=5A0CD3B83567DE0F%21114&amp;authkey=AOdlF5wE-J1ozvw&amp;em=2&amp;wdAr=1.7777777777777777"
              width="100%"
              height="100%"
              loading={<Loader />}
              // id="myId"
              // className="myClassname"
              // display="initial"
              frameborder="0"
              position="relative"
            />
          </div>
        )} */}
      </div>
    );
  }
}
