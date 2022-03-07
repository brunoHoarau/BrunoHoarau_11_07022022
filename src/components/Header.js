import { useState } from "react";
import { NavLink } from "react-router-dom"
import "../styles/components/Header.css"


function Header() {

  return(
    <div className="header">
      <div className='header-logo'>
        <img src={require('../public/LOGO.png') } alt="Logo Kasa" />
      </div>
      <nav>
        <NavLink to="/" id="home-link"  >Accueil</NavLink>
        <NavLink to="/about" id= "about-link" >A propos</NavLink>
      </nav>
    </div>
  )
}

export default Header;