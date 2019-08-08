import React, { Component } from "react";
import "./Navbar.css";
import menu from "./menu.svg";
import OverlayNav from "../OverlayNav/OverlayNav";
/**
 * Everything dealing with the top navigation bar. Renders the overlay nav screen on smaller devices. 
 */

class Navbar extends Component {
  state = {
    screenWidth: window.screen.width,
    overlayWidth: false,
    menuSVG: false
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({
      overlayWidth: !this.state.overlayWidth,
      menuSVG: !this.state.menuSVG
    });
  };

  linkClickedMobile = (e, whereTo) => {
    e.preventDefault();
    this.setState({
      overlayWidth: !this.state.overlayWidth,
      menuSVG: !this.state.menuSVG
    });
    switch (whereTo) {
      case "top":
        document.getElementById("top").scrollIntoView({ behavior: "smooth" });
        break;
      case "howitworks":
        document
          .getElementById("howitworks")
          .scrollIntoView({ behavior: "smooth" });
        break;
      default:
        return;
    }
  };
  render() {
    const { screenWidth, menuSVG } = this.state;
    let svgUrl;
    if (!menuSVG) {
      svgUrl = "navbar__hamburger__open";
    } else {
      svgUrl = "navbar__hamburger__close";
    }
    return (
      <div className="navbar">
        <h1 className="navbar__name">
          mtga <span className="navbar__name__span">pathway</span>
        </h1>
        {screenWidth > 768 ? (
          <ul className="navbar__links">
            <a href="#top">
              <li>Home</li>
            </a>
            <a href="#howitworks">
              <li>How it Works</li>
            </a>
          </ul>
        ) : (
          <img
            className={`navbar__hamburger ${svgUrl}`}
            src={menu}
            onClick={e => this.handleClick(e)}
            alt="Menu"
          />
        )}
        <OverlayNav
          active={this.state.overlayWidth}
          isClicked={this.linkClickedMobile}
        />
      </div>
    );
  }
}

export default Navbar;
