import React, { Component } from "react";
import "./DisplayIcon.css";

class DisplayIcon extends Component {
  render() {
    const {icon} = this.props;
    return (
      <div className="DisplayIcon">
        <img src={icon} alt="Card" />
      </div>
    );
  }
}
export default DisplayIcon;
