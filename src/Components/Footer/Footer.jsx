import './FooterStyles.css'
import '../Responsiveness.css'

import React from 'react'

export default function Footer(props) {
  return (
    <footer className='Footer-Container'>

        <h1 id="Brand">Imperial Narcotics</h1>

        <ul className="Social-Icon-Bar">
            <a id='SocialIcon' href={""}><img id='SocialIcon' src={require('../../Assests/Icons/InstagramIcon.png')} alt="" /></a>

            <a id='SocialIcon' href={""}><img id='SocialIcon' src={require('../../Assests/Icons/TwitterIcon.png')} alt="" /></a>

            <a id='SocialIcon' href={""}><img id='SocialIcon' src={require('../../Assests/Icons/GithubIcon.png')} alt="" /></a>

            <a id='SocialIcon' href={""}><img id='SocialIcon' src={require('../../Assests/Icons/LinkedinIcon.png')} alt="" /></a>
        </ul>

        <p id="Copyright">© 2022 Imperial Narcotics</p>
    </footer>
  )
}
