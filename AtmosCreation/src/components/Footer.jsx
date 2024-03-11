import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='infos'>
            <div className='social'>
            <a href='https://www.instagram.com/aurelius.gill/' target='_blank' rel='noopener noreferrer'>
              <img src='../src/assets/instagram.svg'/>
            </a>

            <a href='https://www.facebook.com/profile.php?id=100092427669650' target='_blank' rel='noopener noreferrer'>
              <img src='../src/assets/facebook.svg'/>
            </a>

            <a href='https://twitter.com/Aureliusgill' target='_blank' rel='noopener noreferrer'>
                <img src='../src/assets/twitter.svg'/>
            </a>

            <a href='http://www.youtube.com/@AureliusGill' target='_blank' rel='noopener noreferrer'>
                <img src='../src/assets/youtube.svg'/>
            </a>
            </div>

            <img className='logo1' src='../src/assets/Logo.png'/>

            <div className='email'>
            info@atmoscreations.io
            </div>
        </div>

        <div className='line'/>

        <p className='rights'>
            ©2024 atmoscreation.io All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer