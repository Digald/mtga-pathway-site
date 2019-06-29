import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import menu from "./menu.svg";
import OverlayNav from "../OverlayNav/OverlayNav";

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
        <div className="navbar__name">
          mtga <span className="navbar__name__span">pathway</span>
        </div>
        {screenWidth > 768 ? (
          <ul className="navbar__links">
            <Link to="#">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>How it Works</li>
            </Link>
          </ul>
        ) : (
          <img
            className={`navbar__hamburger ${svgUrl}`}
            src={menu}
            onClick={e => this.handleClick(e)}
            alt="Menu"
          />
        )}
        <OverlayNav active={this.state.overlayWidth} />
      </div>
    );
  }
}

export default Navbar;
