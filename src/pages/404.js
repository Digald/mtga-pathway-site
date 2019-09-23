import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/app-icon.png"

const FourOhFourWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
`
const FourOhFourMsg = styled.div`
  padding: 10% 0;
  text-align: center;
  color: black;
`
const NotFoundPage = () => (
  <FourOhFourWrapper>
    <Layout>
      <SEO title="404: Not found" />
      <FourOhFourMsg>
        <img src={logo} alt="MTGA Pathway"/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </FourOhFourMsg>
    </Layout>
  </FourOhFourWrapper>
)

export default NotFoundPage
