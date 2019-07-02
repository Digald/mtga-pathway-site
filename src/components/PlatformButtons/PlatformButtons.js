import React, { Component } from "react";
import "./PlatformButtons.css";
// import windows from './windows-10-white-icon-10.jpg';
import windows from './windows-badge.png';

class PlatformButtons extends Component {
  render() {
    return (
      <div className="platformbuttons">
          <button><img className="platformbuttons__image" src={windows} alt="Download for Windows"/></button>
      </div>
    );
  }
}

export default PlatformButtons;
