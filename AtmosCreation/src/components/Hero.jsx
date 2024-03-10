import React from 'react'
import '../components/hero.css'
import {Link} from 'react-scroll'

const Hero = () => {

  return (
    <div>
        <img className='logo animated-logo' src='../src/assets/Logo.png'></img>
        <div className='title animated-title'>Taking Agencies from <span className='span'>$10k to $100k+</span> With Leveraged Content Systems
        </div>
        <div className='description animated-description'>Proven content systems & infrastructures used by the titans in the industry</div>
        <div className='video animated-video'/>

        <Link to='calendlySection' smooth={true} duration={1300} offset={-50}>
          <div className='button animated-button'>
              <div className='btnText'>Book a Call</div>
          </div>
        </Link>
    </div> 
  );
}

export default Hero