import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GetStartedWrapper = styled.div`
  padding-top: 80px;
`

const GetStarted = () => (
  <GetStartedWrapper>
    <Layout>
      <SEO title="Getting Started" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </GetStartedWrapper>
)

export default GetStarted
