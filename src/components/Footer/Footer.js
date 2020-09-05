import React from "react"
import styled from "styled-components"

const FooterContainer = styled.div`
  text-align: center;
`;

const FooterImg = styled.img`
  position: relative;
  bottom: -100px;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterImg
        src="https://res.cloudinary.com/drzgzthur/image/upload/v1597881912/MandJ/anchor-footer-tp.png"
        alt="footer image"
      />
    </FooterContainer>
  )
}
