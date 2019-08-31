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
          <a href="https://github.com/Digald/mtga-pathway/releases/download/v0.1.5/mtga-pathway-setup-0.1.5.exe"><button><img className="platformbuttons__image" src={windows} alt="Download for Windows"/></button></a>
      </div>
    );
  }
}

export default PlatformButtons;
