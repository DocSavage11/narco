import React from 'react'
import './NavBar.css'
import '../Responsiveness.css'

export default function NavBar() {
  return (
    <nav className="Nav-Bar">
        <h1 id="Brand">Imperial Narcotics</h1>

        <div className="NavLink-Container">
            <a id='NavLink' href={""}>Home</a>
            <a id='NavLink' href={""}>About</a>
            <a id='NavLink' href={""}>How It's Made</a>
            <a id='NavLink' href={""}>Contact</a>
        </div>

        <img src={require('../../Assests/Icons/HamburgerMenuIcon.png')} alt="" id="HamburgerMenue" />
    </nav>
  )
}

