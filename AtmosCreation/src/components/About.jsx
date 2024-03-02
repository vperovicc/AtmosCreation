import React from 'react'
import '../components/about.css'
import Line from './Line'
import './about.css'

const About = () => {
  return (
        <div>
            <div className='back'>
                <Line/>
                <div className='text'>What is Atmos Creation</div>
            </div>
            <img src='../src/assets/Hands.png' className='pic'></img>
        </div>

  )
}

export default About