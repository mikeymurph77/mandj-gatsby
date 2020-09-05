import React from "react"
import styled from "styled-components"
import { MobileView } from "react-device-detect";
import MobileMenu from "../MobileMenu/MobileMenu";

import './styles.css';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export default function Layout({ children }) {
  return (
    <Container id="main-wrapper">
      <MobileView>
        <MobileMenu />
      </MobileView>
      {children}
    </Container>
  )
}
