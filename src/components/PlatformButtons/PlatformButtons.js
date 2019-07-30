import React, { Component } from "react";
import "./PlatformButtons.css";
// import windows from './windows-10-white-icon-10.jpg';
import windows from './windows-badge.png';

class PlatformButtons extends Component {
  render() {
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
    if (isMobile) {
      return <div className="platformbuttons-mobile"></div>
    }
    return (
      <div className="platformbuttons">
          <button><img className="platformbuttons__image" src={windows} alt="Download for Windows"/></button>
      </div>
    );
  }
}

export default PlatformButtons;
