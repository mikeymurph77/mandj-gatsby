import React from "react"
import styled from "styled-components"
import { MobileView } from "react-device-detect";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Helmet } from "react-helmet"

import './styles.css';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export default function Layout({ children }) {
  return (
    <Container id="main-wrapper">
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&family=Parisienne&family=Tangerine&display=swap" rel="stylesheet" />
      </Helmet>
      <MobileView>
        <MobileMenu />
      </MobileView>
      {children}
    </Container>
  )
}
