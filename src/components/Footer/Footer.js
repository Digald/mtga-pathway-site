import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__contact">
          <p className="footer__heading">Contact Me</p>
          <p className="footer__text">
            If you are experience problems with the webpage, desktop app, or
            have any concerns or suggestions about MTGA Pathway, please reach
            out to me at <span>markalaniz000@gmail.com</span>
          </p>
          <p>You may also find me at</p>
        </div>
        <div classname="footer__support">
            <p>I hope you enjoy the project!</p>
          <p>
            If you enjoy what I've created please consider supporting my efforts
            to continue creating tools that people with similar interests make good use of.
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
