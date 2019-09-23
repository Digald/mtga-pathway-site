import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import OverlayHeader from "./overlayheader"
import menu from "../images/menu.svg"
import closeMenu from "../images/close_menu.svg"

/**
 * Everything dealing with the top navigation bar. Renders the overlay nav screen on smaller devices.
 */
// styles
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b3a;
  /* width: 100%; */
  height: 100%;
  img {
    padding: 4%;
    width: 30px;
    animation: open-to-close 1s ease;
    z-index: 100;
  }
  @media (max-width: 768px) {
    background-color: white;
  }
`
const HeaderName = styled.h1`
  font-size: 30px;
  letter-spacing: 5px;
  font-family: "Fira Sans", sans-serif;
  background-color: white;
  padding: 0 50px;
  height: 100%;
  display: flex;
  align-items: center;
  color: #1b1b3a;
  font-weight: bold;
  white-space: nowrap;
  margin: 0;
  span {
    color: #f84aa7;
  }
  @media (max-width: 768px) {
    width: 20%;
    font-size: 20px;
    padding: 0 30px;
  }
`
const HeaderLinks = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  font-weight: bold;
  a {
    text-decoration: none;
    color: inherit;
    padding: 10px 20px;
  }
  a:hover {
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
    return;
  }
  render() {
    const { screenWidth, menuSVG } = this.state
    console.log(screenWidth)
    let svgUrl
    if (!menuSVG) {
      svgUrl = true
    } else {
      svgUrl = false
    }
    return (
      <HeaderWrapper>
        <HeaderName>
          mtga <span>pathway</span>
        </HeaderName>
        {screenWidth > 768 ? (
          <HeaderLinks>
            <Link to="/#top">
              <li>Home</li>
            </Link>
            <Link to="/#howitworks">
              <li>How it Works</li>
            </Link>
            <Link to="/getstarted">
              <li>Get Started</li>
            </Link>
          </HeaderLinks>
        ) : (
          <img
            src={svgUrl ? menu : closeMenu}
            onClick={e => this.handleClick(e)}
            alt="Menu"
          />
        )}
        <OverlayHeader
          active={this.state.overlayWidth}
          isClicked={this.linkClickedMobile}
        />
      </HeaderWrapper>
    )
  }
}

export default Header
