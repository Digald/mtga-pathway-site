import React, { Component } from "react";
import "./SingleSection.css";

class SingleSection extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <div className="singleSection">
        <div className="singleSection__image" />
        <div className="singleSection__text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default SingleSection;
