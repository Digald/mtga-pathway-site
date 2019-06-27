import React, { Component } from "react";
import "./Navbar.css";
import menu from './menu.svg';

class Navbar extends Component {
  state = {
    screenWidth: window.screen.width
  }

  render() {
    const {screenWidth} = this.state;

    return (
      <div className="navbar">
        <div className="navbar__name">
          mtga <span className="navbar__name__span">pathway</span>
        </div>
        {screenWidth > 768 ? (<ul className="navbar__links">
          <li>Home</li>
          <li>How it Works</li>
        </ul>) : (<img className="navbar__hamburger" src={menu} alt="="/>)}
      </div>
    );
  }
}

export default Navbar;
