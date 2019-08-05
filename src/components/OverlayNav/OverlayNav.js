import React, { Component } from "react";
import "./OverlayNav.css";

class OverlayNav extends Component {
  render() {
    console.log(this.props);
    const { active, isClicked } = this.props;
    let activeState;
    if (!active) {
      activeState = "overlayNav-inactive";
    } else {
      activeState = "overlayNav-active";
    }

    return (
      <div className={`overlayNav ${activeState}`} id="overlay">
        <ul className="overlayNav-content">
          <a onClick={e => isClicked(e, 'top')} href="#top" className="overlayNav-link">
            <li>Home</li>
          </a>
          <a onClick={e => isClicked(e, 'howitworks')} href="#howitworks" className="overlayNav-link">
            <li>How it Works</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default OverlayNav;
