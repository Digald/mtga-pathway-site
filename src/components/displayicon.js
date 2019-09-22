import React, { Component } from "react"
import styled from "styled-components"

/**
 * Container holding the icon that goes along with the description of the app's features.
 */

const DisplayIconWrapper = styled.div`
  display: flex;
  justify-self: center;
  width: 100%;
  justify-content: center;
  img {
    width: 300px;
  }
`
class DisplayIcon extends Component {
  render() {
    const { icon } = this.props
    return (
      <DisplayIconWrapper>
        <img src={icon} alt="" />
      </DisplayIconWrapper>
    )
  }
}
export default DisplayIcon
