import React, { Component } from "react";
import "../css/Avatar.css";
// import Ava from '../img/stitch.jpg';
import { Link } from "react-router-dom";

const Avatar = ({ Ava }) => {
  return (
    <div className="Avatar">
      <Link to={`/Profile`}>
        <img className="Picture" src={Ava}></img>
        <div className="ProfileLayer">
            <div className = "ProfileLayerText">Profile</div>
        </div>
      </Link>
    </div>
  );
};

export default Avatar;
