import React, { Component } from "react"
import { Link, navigate } from "gatsby"
import styled from "styled-components"

/**
 * The menu that toggles at smaller screen sizes. It overlays the entire site when toggled on.
 */
const Overlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(27, 27, 58);
  overflow-x: hidden;
  transition: 0.5s;
  height: ${props => (props.activeStatus ? 100 : 0)}%;
  z-index: ${props => (props.activeStatus ? 2 : 1)};
`

const OverlayContent = styled.ul`
  list-style: none;
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  padding: 0;
  a:first-child {
    color: #f84aa7;
  }
  a {
    padding: 20px;
    text-decoration: none;
    font-size: 40px;
    color: white;
    font-weight: bold;
    display: block;
    transition: 0.3s;
  }
`

class OverlayHeader extends Component {
  handleRoute = (e, toLocation) => {
    e.preventDefault()
    navigate(`${toLocation}`, { replace: true })
    this.props.isClicked(e)
  }

  render() {
    const { active } = this.props
    let activeState
    if (!active) {
      activeState = false
    } else {
      activeState = true
    }
    return (
      <Overlay activeStatus={activeState} id="overlay">
        <OverlayContent>
          <Link to="/" onClick={e => this.handleRoute(e, "/#top")}>
            <li>Home</li>
          </Link>
          <Link to="/" onClick={e => this.handleRoute(e, "/#howitworks")}>
            <li>How it Works</li>
          </Link>
          <Link to="/" onClick={e => this.handleRoute(e, "/getstarted")}>
            <li>Get Started</li>
          </Link>
        </OverlayContent>
      </Overlay>
    )
  }
}

export default OverlayHeader
