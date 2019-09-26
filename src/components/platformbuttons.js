import React, { Component } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import windows from "../images/windows-badge.png"

/**
 * The download button that appears right above the app preview.
 */

const PlatformButton = styled.button`
  border: none;
  background-color: transparent;
`
const PlatformWindows = styled.img`
  height: 200px;
  width: 200px;
`

const PlatformMobileView = styled.div`
  margin: 5% 0;
`

class PlatformButtons extends Component {
  handleClick = e => {
    e.preventDefault()
    navigate("/getstarted", { replace: true })
    window.open(
      "https://github.com/Digald/mtga-pathway/releases/latest",
      "_blank"
    )
  }
  render() {
    return (
      <div className="platformbuttons">
        <PlatformButton onClick={e => this.handleClick(e)}>
          <PlatformWindows src={windows} alt="Download for Windows" />
        </PlatformButton>
      </div>
    )
  }
}

export default PlatformButtons
