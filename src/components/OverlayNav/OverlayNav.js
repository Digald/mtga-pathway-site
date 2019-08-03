import React, { Component } from "react";
import "./OverlayNav.css";
// import { Link } from "react-router-dom";

class OverlayNav extends Component {
  render() {
    const { active } = this.props;
    let activeState;
    if (!active) {
      activeState = "overlayNav-inactive";
    } else {
      activeState = "overlayNav-active";
    }

    return (
      <div className={`overlayNav ${activeState}`} id="overlay">
        <ul className="overlayNav-content">
          <a href="#home" className="overlayNav-link">
            <li>Home</li>
          </a>
          <a href="#howitworks" className="overlayNav-link">
            <li>How it Works</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default OverlayNav;
