import React from 'react'
import '../components/about.css'
import Line from './Line'
import './about.css'

const About = () => {
  return (
        <div>
            <div className='back animated-title2'>
                <Line/>
                <div className='text'>What is Atmos Creation</div>
            </div>

            <img src='../src/assets/Hands.png' className='pic animated-pic'></img>

            <div className='boxter'>
              <div className='desc animated-textL'>Atmos Creation was born to make content effortless for agencies. We offer everything you need to build a powerful online presence with SFC</div>
              <div className='desc animated-textR'>Content systems, exclusive community access, and mastering the art of speaking to the camera with authority, we cover every aspect.</div>
              <div className='desc animated-textL'>Our mission is to bridge the entire content creation gap, making it impossible for your agency not to scale from $10k to $100k+</div>
              <div className='lastDiv animated-textR'>
                <div className='lastText'>With Atmos, your success is inevitable.</div>
                <img className='icon' src='../src/assets/icon.png'></img>
              </div>
            </div>

        </div>

  )
}

export default About