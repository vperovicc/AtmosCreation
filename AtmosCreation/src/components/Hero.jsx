import React from 'react'
import '../components/hero.css'

const Hero = () => {
  return (
    <div>
        <img className='logo' src='../src/assets/Logo.png'></img>
        <div className='title'>Taking Agencies from <span className='span'>$10k to $100k+</span> With Leveraged Content Systems
        </div>
        <div className='description'>Proven content systems & infrastructures used by the titans in the industry</div>
        <div className='video'/>

        <div className='button'>
            <div className='btnText'>Book a Call</div>
        </div>
    </div> 
  );
}

export default Hero