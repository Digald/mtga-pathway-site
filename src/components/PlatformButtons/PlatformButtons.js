import React, { Component } from "react";
import "./PlatformButtons.css";
import windows from './windows-badge.png';

/**
 * The download button that appears right above the app preview. 
 */

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
