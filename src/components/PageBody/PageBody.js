import React, { Component } from "react";
import "./PageBody.css";
import PlatformButtons from "../PlatformButtons/PlatformButtons";
import backgroundAnimation from "./backgroundAnimation.mp4";

/**
 * The page body is the introduction to the site right below the navigation bar. It also holds the entire video animation in the background showing mtg arena.
 */

class PageBody extends Component {
  render() {
    return (
      <div className="pagebody" id="home">
        <video autoPlay muted loop>
          <source src={backgroundAnimation} type="video/mp4" />
          Your browser does not support HTML5 video
        </video>
        <h2 className="pagebody__heading">
          The smart way to make the most out of your card collection
        </h2>
        <p className="pagebody__subheading">*For desktop platforms only</p>
        <PlatformButtons />
      </div>
    );
  }
}

export default PageBody;
