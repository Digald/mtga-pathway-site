import React, { Component } from "react"
import styled from "styled-components"
import RenderIcons from './rendericons';

/**
 * Each indivial part of the description section that includes an image, a title, and a paragraph explaining what the app does.
 */

const SingleSectionWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
const SingleSectionText = styled.div`
  text-align: center;
  padding: 10%;
  @media (max-width: 768px) {
    text-align: center;
    padding-top: 0;
  }
  h3 {
    font-size: 40px;
    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
  p {
    font-size: 20px;
  }
`

class SingleSection extends Component {
  render() {
    const { title, text, image } = this.props

    return (
      <SingleSectionWrapper>
        <RenderIcons image={image} />
        <SingleSectionText>
          <h3>{title}</h3>
          <p>{text}</p>
        </SingleSectionText>
      </SingleSectionWrapper>
    )
  }
}
export default SingleSection
