import React, { Component } from "react";
import "./AppPreview.css";
import preview from "./mtga_preview.png";

/**
 * Image that displays after the introduction section of the page. Shows a preview of what the desktop interface looks like.
 */

class AppPreview extends Component {
  render() {
    return (
      <div className="apppreview">
        <img src={preview} id="appPreview" alt="App" />
      </div>
    );
  }
}

export default AppPreview;
