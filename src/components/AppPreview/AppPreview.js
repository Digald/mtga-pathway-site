import React, { Component } from "react";
import "./AppPreview.css";
import preview from "./mtga_preview.png";

class AppPreview extends Component {
  render() {
    return <img className="apppreview" src={preview} alt="App" />;
  }
}

export default AppPreview;
