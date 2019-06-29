import React, { Component } from "react";
import "./OverlayNav.css";
import {Link} from 'react-router-dom';

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
          <Link to="#">
            <li>Home</li>
          </Link>
          <Link to="#">
            <li>How it Works</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default OverlayNav;
