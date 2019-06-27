import React, { Component } from "react";
import "./OverlayNav.css";

class OverlayNav extends Component {
  render() {
    return (
      <div className="overlayNav" id="overlay">
          <button className="closebtn">x</button>
          <div className="overlayNav-content">
            
          </div>
      </div>
    );
  }
}

export default OverlayNav;
