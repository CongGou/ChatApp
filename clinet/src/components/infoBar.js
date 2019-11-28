import React, { useState, useEffect } from "react";
import "./infoBar.css";

const infoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        className="onlineIcon"
        src={require("../images/online.png")}
        alt="onlineIcon image"
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img
          className="closeIcon"
          src={require("../images/close.png")}
          alt="close image"
        />
      </a>
    </div>
  </div>
);

export default infoBar;
