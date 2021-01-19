import React, { Component } from "react";
import "../css/Profile.css";
import Avatar from "./Avatar.js";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  Logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  moveToProfile() {
    window.location.href = "/Profile";
  }

  render() {
    return (
      <div className="Profile">
        <div className="ProfileHeader"></div>
        <Avatar
        //   Ava={this.state.Avatar}
        //   id={localStorage.getItem("userId")}
        ></Avatar>

        <div className="Information">
          <div className="UserInfo">
            <div className="UserInfoName">{localStorage.username}</div>
            <span style={{ fontWeight: "300", fontSize: "0.9rem" }}>
              Newbie
            </span>
            <div className="UserOtherInfo">
              <table className="UserOtherInfoTable">
                <tr>
                  <td>Group: Year 2020</td>
                </tr>

                <tr>
                  <td>Score: {localStorage.TotalScore}</td>
                </tr>

                <tr
                  className="UserOtherInfoHover"
                  onClick={this.moveToProfile.bind(this)}
                >
                  <td>Edit</td>
                </tr>

                <tr
                  className="UserOtherInfoHover"
                  onClick={this.Logout.bind(this)}
                >
                  <td>Logout</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
