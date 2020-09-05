import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { BrowserView, MobileView, isMobile } from "react-device-detect";

import { rhythm } from "../../utils/typography"
import Countdown from "./Countdown";
import Navigation from "../Navigation/Navigation";
import CenteredDiv from "../Helpers/CenteredDiv";

const HeaderKnotImg = styled.img`
  position: relative;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  text-align: center;
`
const Title = styled.h1`
  font-size: ${rhythm(2)};
  font-family: 'Mr De Haviland', cursive;
  line-wrap: none;
  font-weight: 500;

  @media screen and (min-width: 601px) {
    font-size: ${rhythm(6)};
  }
`

const DateLocation = styled.h2`
  font-size: ${rhythm(1)};
  color: #b02e42;
  font-family: 'Tangerine';

  @media screen and (min-width: 601px) {
    font-size: ${rhythm(1.5)};
  }
`

export default function Header() {
  return (
    <div>
      <BrowserView>
        <CenteredDiv>
          <HeaderKnotImg
            src="https://res.cloudinary.com/drzgzthur/image/upload/v1598387579/MandJ/knot.png"
            alt="Header Image"
          />
        </CenteredDiv>
      </BrowserView>
      <MobileView>
        <HeaderKnotImg
          src="https://res.cloudinary.com/drzgzthur/image/upload/v1598387579/MandJ/knot.png"
          alt="Header Image"
        />
      </MobileView>

      <HeaderLink to={'/'}>
        <HeaderContainer>
          <Title>
            <span style={{ color: "#013f7f" }}>Jillian</span>{" "}
            <span style={{ color: "#b02e42" }}>&</span>{" "}
            <span style={{ color: "#013f7f" }}>Michael</span>
          </Title>
          <DateLocation>September 3, 2021 &bull; Danvers, MA</DateLocation>
          <Countdown />
        </HeaderContainer>
      </HeaderLink>
      {!isMobile && (
        <Navigation />
      )}
    </div>
  )
}
