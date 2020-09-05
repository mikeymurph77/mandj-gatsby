import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const SectionContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  text-align: center;
  font-family: 'Tangerine';
  font-size: ${rhythm(1.5)};

  @media screen and (min-width: 601px) {
    font-size: ${rhythm(2)};
  }

  :before,
  :after {
    content: "";
    flex: 1;
    border-bottom: 2px solid #000;
  }

  :before {
    margin-right: ${rhythm(2 / 4)};
  }

  :after {
    margin-left: ${rhythm(2 / 4)};
  }
`

export default function SectionTitle(props) {
  return (
    <SectionContainer>
      <Title id={props.anchor}>{props.title}</Title>
    </SectionContainer>
  )
}
