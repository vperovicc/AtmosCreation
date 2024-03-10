import React from 'react'
import './service.css'
import Line from '../components/Line.jsx'

const Service = () => {
  return (
    <div>
        <div className='tit'>
            <Line/>
            <h className='titText' >Our Services</h>
        </div>

        <div className='contain'>
            <div className='serviceTitle'>
                <p>Content (SFC) Content System</p>
                <p>Script Templates</p>
                <p>Personal Studio Guide</p>
                <p>Talk to Camera Mini Course</p>
                <p>Content (SFC 6x per week)</p>
                <p>Community for Agency Owners</p>
            </div>

            <div className='dots'>
                <div className='circle'/>
                <div className='circle'/>
                <div className='circle'/>
                <div className='circle'/>
                <div className='circle'/>
                <div className='circle'/>
            </div>

            <div className='creatives'>
                <div className='separateCreative'>
                    <img src='../src/assets/icon.png'></img>
                    <p>Our signature SFC System. Tailored for impact, our strategy combines a content calendar, production workflow, and distribution strategy to ensure your message not only reaches but resonates with your audience. With our system everything becomes streamlined.</p>
                </div>
                <div className='separateCreative'>
                <img src='../src/assets/icon.png'></img>
                    <p>Designed specifically for Short Form Content, our templates guide you through creating compelling scripts with four unique styles. </p>
                </div>
                <div className='separateCreative'>
                <img src='../src/assets/icon.png'></img>
                    <p>From selecting the perfect room and background to optimising lighting and cameras, our guides ensure you present your best self. We even cover wardrobe tips to enhance your on-camera presence. It's your personal studio setup, simplified.</p>
                </div>
                <div className='separateCreative'>
                <img src='../src/assets/icon.png'></img>
                    <p>Learn the art of camera communication with our Talk to Camera Mini Course. Learn the four pillars of influential communication—authenticity, emotion, humour, and energy. This course turns amateur content creators into titans.</p>
                </div>
                <div className='separateCreative'>
                <img src='../src/assets/icon.png'></img>
                    <p>Build a loyal following with our SFC 6x per week service. We help you consistently deliver high-quality, engaging short form content that captures attention. Keep your brand relevant and your audience engaged with fresh, compelling content week after week.</p>
                </div>
                <div className='separateCreative'>
                <img src='../src/assets/icon.png'></img>
                    <p>"Connect and grow with our exclusive community for agency owners. This is your space to network with peers, discover new service providers, and share insights. Whether you're looking to expand your offerings or seeking partnerships, our community is designed to support your agency's growth and success."</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service