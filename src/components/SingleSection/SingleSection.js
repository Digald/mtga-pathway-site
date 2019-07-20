import React, { Component } from "react";
import "./SingleSection.css";

class SingleSection extends Component {
  render() {
    const { title, text, image } = this.props;
    return (
      <div className="singleSection">
        <div className="singleSection__image">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
        <div className="singleSection__text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default SingleSection;
