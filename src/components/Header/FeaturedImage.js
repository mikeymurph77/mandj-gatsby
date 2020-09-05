import React from "react"
import styled from "styled-components"

const FeaturedImageTag = styled.img`
  width: 100%;
`

export default function FeaturedImage() {
  return (
    <FeaturedImageTag
      src="https://res.cloudinary.com/drzgzthur/image/upload/v1598375510/MandJ/engagement-photos/jm_pano-optimized.jpg"
      alt="We're getting married"
    />
  )
}
