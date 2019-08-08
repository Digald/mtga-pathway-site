import React, { Component } from "react";
import "./DisplayIcon.css";

/**
 * Container holding the icon that goes along with the description of the app's features.
 */

class DisplayIcon extends Component {
  render() {
    const {icon} = this.props;
    return (
      <div className="DisplayIcon">
        <img src={icon} alt="" />
      </div>
    );
  }
}
export default DisplayIcon;
