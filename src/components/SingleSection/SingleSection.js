import React, { Component } from "react";
import "./SingleSection.css";
import RenderIcons from '../RenderIcons/RenderIcons';

/**
 * Each indivial part of the description section that includes an image, a title, and a paragraph explaining what the app does.
 */

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
