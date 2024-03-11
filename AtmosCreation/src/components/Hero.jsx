import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import './hero.css'

const Hero = () => {

  return (
    <div>
      <img className='logo' src='../src/assets/Logo.png' alt='Logo' />
      <div className='title'>Taking Agencies from <span className='span'>$10k to $100k+</span> With Leveraged Content Systems
      </div>
      <div className='description'>Proven content systems & infrastructures used by the titans in the industry</div>
      <div className='video' />

      <Link to='calendlySection' smooth={true} duration={1300} offset={-50}>
        <div className='button'>
          <div className='btnText'>Book a Call</div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
