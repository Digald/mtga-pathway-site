import React, { Component } from "react"
import simpleIcons from "simple-icons"
import parse from "html-react-parser"
import styled from "styled-components"

/**
 * The entire footer of the page which contains contact information and a kofi link just in case.
 */

const FooterWrapper = styled.div`
  background-color: #1b1b3a;
  display: flex;
  justify-content: center;
  border-top: 5px solid #ff3562;
  svg {
    width: 50px;
    fill: white;
  }
  svg:first-child {
    margin-right: 20px;
  }
  @media (max-width: 870px) {
    flex-wrap: wrap;
  }
`
const FooterSection = styled.div`
  padding: 1%;
  p {
    text-align: center;
  }
  .footer__text {
    margin-right: 15%;
    margin-left: 15%;
  }
  
`
const FooterHeading = styled.p`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;
  text-decoration: overline;
`
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterSection>
          <FooterHeading>Contact Me</FooterHeading>
          <p className="footer__text">
            If you experience problems with the webpage, desktop app, or have
            any concerns or suggestions about MTGA Pathway, contact me.
          </p>
          <FooterLinks>
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
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Enjoy the Project</FooterHeading>
          <p className="footer__text">
            If you enjoy what I've created please consider supporting my efforts
            to continue creating tools that people with similar interests can
            make good use of.
          </p>
          <FooterLinks>
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
          </FooterLinks>
        </FooterSection>
      </FooterWrapper>
    )
  }
}

export default Footer
