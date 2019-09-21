import React, { Component } from "react"
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
  height: ${props => props.activeStatus ? 100 : 0}%;
  z-index: ${props => props.activeStatus ? 2 : 1};
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
  render() {
    const { active, isClicked } = this.props
    let activeState
    if (!active) {
      activeState = false
    } else {
      activeState = true
    }

    return (
        <Overlay activeStatus={activeState} id="overlay">
          <OverlayContent>
            <a
              onClick={e => isClicked(e, "top")}
              href="#top"
              className="overlayNav-link"
            >
              <li>Home</li>
            </a>
            <a
              onClick={e => isClicked(e, "howitworks")}
              href="#howitworks"
              className="overlayNav-link"
            >
              <li>How it Works</li>
            </a>
          </OverlayContent>
        </Overlay>
    )
  }
}

export default OverlayHeader
