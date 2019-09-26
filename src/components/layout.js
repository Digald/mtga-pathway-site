import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"
import "./layout.css"

const ContainHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 3;
`

const Layout = ({ children }) => {
  return (
    <>
      <ContainHeader>
        <Header />
      </ContainHeader>
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
