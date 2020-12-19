import React, { Component } from "react";
import "../css/Profile.css";
import Avatar from "./Avatar.js";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Profile">
        {/* <InsideProfile></InsideProfile> */}

        <Avatar
        //   Ava={this.state.Avatar}
        //   id={localStorage.getItem("userId")}
        ></Avatar>

        <div className="Information">
          <div className="UserInfo">
            <div className = "UserInfoName">Random user</div>
            <span style={{ fontWeight: "300", fontSize: "1rem" }}>
              Newbie
            </span>
          </div>
        </div>
      </div>
    );
  }
}
