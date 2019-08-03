import React, { Component } from "react";
import "./Footer.css";
import simpleIcons from "simple-icons";
import parse from "html-react-parser";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__section">
          <p className="footer__heading">Contact Me</p>
          <p className="footer__text">
            If you experience problems with the webpage, desktop app, or have
            any concerns or suggestions about MTGA Pathway, contact me.
          </p>
          <div className="footer__links">
            <a
              href="https://github.com/Digald"
              target="_blank"
              rel="noopener noreferrer"
            >
              {parse(simpleIcons.get("github").svg)}
            </a>
            <a
              href="https://www.linkedin.com/in/markalaniz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {parse(simpleIcons.get("linkedin").svg)}
            </a>
          </div>
        </div>
        <div className="footer__section">
          <p className="footer__heading">Enjoy the Project</p>
          <p className="footer__text">
            If you enjoy what I've created please consider supporting my efforts
            to continue creating tools that people with similar interests can
            make good use of.
          </p>
          <a
            href="https://ko-fi.com/T6T110922"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height="36"
              style={{ border: "0px", height: "36px" }}
              src="https://az743702.vo.msecnd.net/cdn/kofi1.png?v=2"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
