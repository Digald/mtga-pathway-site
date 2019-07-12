import React, { Component } from "react";
import "./AppPreview.css";
import preview from "./mtga_preview.png";

class AppPreview extends Component {
  render() {
    return (
      <div className="apppreview">
        <img src={preview} alt="App" />
      </div>
    );
  }
}

export default AppPreview;
