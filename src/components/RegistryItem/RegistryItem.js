import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const RegistryItemContainer = styled.div`
  text-align: center;
  margin-top: ${rhythm(2)};
  flex-basis: 100%;


  @media screen and (min-width: 601px) {
    flex-basis: 1;
  }
`

const StoreIcon = styled.img`
  max-width: 75px;
  max-height: 75px;
`

export default function RegistryItem({ store, logoUrl, link }) {
  return (
    <RegistryItemContainer>
      <StoreIcon src={logoUrl} />
      <h3>{store}</h3>
      <a href={link} target="_blank" rel="noreferrer">View Registry</a>
    </RegistryItemContainer>
  )
}
