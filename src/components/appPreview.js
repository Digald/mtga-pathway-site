import React, { Component } from "react"
import styled from "styled-components"
import Image from "../components/image"

/**
 * Image that displays after the introduction section of the page. Shows a preview of what the desktop interface looks like.
 */

const AppPreviewWrapper = styled.div`
  background-color: rgba(27, 27, 58, 0.8);
  width: 100%;
  grid-column: 1;
  grid-row: 2 / 4;
  flex-flow: 1;
  display: flex;
  justify-content: center;
  .gatsby-image-wrapper {
    width: 796px;
    @media (max-width: 796px) {
      width: 100%;
    }
  }
  img {
    z-index: 2; 
    -webkit-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.75);
  }
`

class AppPreview extends Component {
  render() {
    return (
      <AppPreviewWrapper>
        <Image />
      </AppPreviewWrapper>
    )
  }
}

export default AppPreview
