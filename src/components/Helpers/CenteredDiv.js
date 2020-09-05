import React from "react"
import styled from "styled-components"

const Centered = styled.div`
  text-align: center;
`

export default function CenteredDiv({ children }) {
  return (
    <Centered>
      {children}
    </Centered>
  )
}
