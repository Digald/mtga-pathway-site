import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

/**
 * Everything dealing with the top navigation bar. Renders the overlay nav screen on smaller devices.
 */

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b3a;
  width: 100%;
  height: 100%;
  .hamburger {
    padding: 5%;
    width: 30px;
    animation: open-to-close 1s ease;
    z-index: 100;
  }
  .hamburger__open {
    content: url("./menu.svg");
  }
  .hamburger__close {
    content: url("./close_menu.svg");
  }
`
const HeaderName = styled.h1`
  font-size: 30px;
  letter-spacing: 5px;
  font-family: "Fira Sans", sans-serif;
  background-color: white;
  padding: 22px 50px;
  color: #1b1b3a;
  font-weight: bold;
  white-space: nowrap;
  margin: 0;
  span {
    color: #f84aa7;
  }
`
const HeaderLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-weight: bold;
  a {
    text-decoration: none;
    color: inherit;
    padding: 10px 20px;
  }
  li:hover {
    color: #f84aa7;
  }
`

class Header extends Component {
  state = {
    screenWidth: window.screen.width,
    overlayWidth: false,
    menuSVG: false,
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      overlayWidth: !this.state.overlayWidth,
      menuSVG: !this.state.menuSVG,
    })
  }

  linkClickedMobile = (e, whereTo) => {
    e.preventDefault()
    this.setState({
      overlayWidth: !this.state.overlayWidth,
      menuSVG: !this.state.menuSVG,
    })
    switch (whereTo) {
      case "top":
        document.getElementById("top").scrollIntoView({ behavior: "smooth" })
        break
      case "howitworks":
        document
          .getElementById("howitworks")
          .scrollIntoView({ behavior: "smooth" })
        break
      default:
        return
    }
  }
  render() {
    const { screenWidth, menuSVG } = this.state
    let svgUrl
    if (!menuSVG) {
      svgUrl = "hamburger__open"
    } else {
      svgUrl = "hamburger__close"
    }
    return (
      <HeaderWrapper>
        <HeaderName>
          mtga <span>pathway</span>
        </HeaderName>
        {screenWidth > 768 ? (
          <HeaderLinks>
            <a href="#top">
              <li>Home</li>
            </a>
            <a href="#howitworks">
              <li>How it Works</li>
            </a>
          </HeaderLinks>
        ) : (
          <img
            className={`hamburger ${svgUrl}`}
            src={menu}
            onClick={e => this.handleClick(e)}
            alt="Menu"
          />
        )}
        <OverlayNav
          active={this.state.overlayWidth}
          isClicked={this.linkClickedMobile}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
