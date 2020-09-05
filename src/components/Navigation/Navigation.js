import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"

const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${rhythm(1)} ${rhythm(1)} ${rhythm(1)};
`

const NavLink = styled(Link)`
  margin: ${rhythm(1)} ${rhythm(1 / 4)} 0;
  text-decoration: none;
`

export default function Navigation() {
  return (
    <LinkRow>
      <NavLink to={`/#`}>Home</NavLink>
      <NavLink to={`/photos`}>Photos</NavLink>
      <NavLink to={`/wedding-party`}>Wedding Party</NavLink>
      <NavLink to={`/registry`}>Registry</NavLink>
      <NavLink to={`/accommodations`}>Accommodations</NavLink>
    </LinkRow>
  )
}
