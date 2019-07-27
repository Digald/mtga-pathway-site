import React, { Component } from "react";
import "./SingleSection.css";
import RenderIcons from '../RenderIcons/RenderIcons';

class SingleSection extends Component {
  render() {
    const { title, text, image } = this.props;

    return (
      <div className="singleSection">
        <RenderIcons image={image}/>
        <div className="singleSection__text">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default SingleSection;
