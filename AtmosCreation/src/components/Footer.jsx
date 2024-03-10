import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='infos'>
            <div className='social'>
                <img src='../src/assets/instagram.svg'/>
                <img src='../src/assets/facebook.svg'/>
                <img src='../src/assets/twitter.svg'/>
                <img src='../src/assets/youtube.svg'/>
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