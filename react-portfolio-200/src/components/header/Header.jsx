import React from 'react'
import "./header.css"
import CTA from "./CTA.jsx"
import headerSocials from './headerSocials'
const Header = () => {
  return (
  <header>
    
    <div className=".container.header__container">

    <h5>Hello i'm</h5>
    <h1>Micah Sharifi</h1>
    <h5 className="text-light">Fullstack Developer</h5>
    <CTA/>
<headerSocials/>
    </div>
  </header>
  )
}

export default Header