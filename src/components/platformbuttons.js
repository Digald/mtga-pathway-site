import React, { Component } from "react"
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
  render() {
    const isMobile = navigator.userAgent.match(
      /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
    )
    if (isMobile) {
      return <PlatformMobileView></PlatformMobileView>
    }
    return (
      <div className="platformbuttons">
        <a href="https://github.com/Digald/mtga-pathway/releases/latest">
          <PlatformButton>
            <PlatformWindows src={windows} alt="Download for Windows" />
          </PlatformButton>
        </a>
      </div>
    )
  }
}

export default PlatformButtons
