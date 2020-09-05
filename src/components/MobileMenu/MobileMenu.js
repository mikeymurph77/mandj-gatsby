import React from "react"
import { slide as Menu } from 'react-burger-menu'

import { Link } from "gatsby"

import "./styles.css"

const MobileMenu = () => {
  return (
    <Menu right pageWrapId={ "main-wrapper" } outerContainerId={ "___gatsby" }>
      <Link to={`/`} className="menu-item">Home</Link>
      <Link to={`/accommodations`} className="menu-item">Accommodations</Link>
      <Link to={`/registry`} className="menu-item">Registry</Link>
      <Link to={`/wedding-party`} className="menu-item">Wedding Party</Link>
      <Link to={`/photos`} className="menu-item">Photos</Link>
    </Menu>
  )
}

export default MobileMenu
