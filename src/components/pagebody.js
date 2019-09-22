import React, { Component } from "react"
import styled from "styled-components"
import PlatformButtons from "./platformbuttons";
import backgroundAnimation from "../images/backgroundAnimation.mp4"

/**
 * The page body is the introduction to the site right below the navigation bar. It also holds the entire video animation in the background showing mtg arena.
 */

const PageBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30%;
  text-align: center;
  @media (max-width: 1200px) {
    padding: 0 20%;
  }
  @media (max-width: 700px) {
    padding: 0 10%;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
  video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
`
const PageBodyHeading = styled.h2`
  margin-top: 40px;
  /* font-size: 55px; */
  font-size: 3rem;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

const PageBodySubHeading = styled.p`
  margin: 0;
`

class PageBody extends Component {
  render() {
    return (
      <PageBodyWrapper id="home">
        <video autoPlay muted loop>
          <source src={backgroundAnimation} type="video/mp4" />
          Your browser does not support HTML5 video
        </video>
        <PageBodyHeading>
          The smart way to make the most out of your card collection
        </PageBodyHeading>
        <PageBodySubHeading>*For desktop platforms only</PageBodySubHeading>
        <PlatformButtons />
      </PageBodyWrapper>
    )
  }
}

export default PageBody
