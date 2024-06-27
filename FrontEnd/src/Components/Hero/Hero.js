import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.webp'
import { Link } from 'react-router-dom'

//  Change Images Here..
const Hero = () => {
  return (
    <>    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals Only</h2>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
                
            </div>
            <p>Products</p>
            <p>for everyone</p>
        <Link to="/popular">
        <div className='hero-latest-btn'>
            <div> Latest Products</div>
            <img src={arrow_icon} alt='' />
        </div>
        </Link>
        </div>
    
        <div className='hero-right'>                          
            <img src={hero_img} className='img' />    
        </div>
        
    </div>
    
    </>
  )
}

export default Hero