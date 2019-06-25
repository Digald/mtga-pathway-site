import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar__name">mtga pathway</div>
        <ul className="navbar__links">
          <li>Home</li>
          <li>How it Works</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
