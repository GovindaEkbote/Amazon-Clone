import React from 'react'
import './Offers.css';
import exclucive_image from '../Assets/exclusive_image.webp'
import { Link } from 'react-router-dom';
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers Products</p>
            <Link to="newsletter">
            <button>Check Now</button>
            </Link>
        </div>
        <div className='offers-right'>
            <img src={exclucive_image} alt=''></img>
        </div>
    </div>
  )
}

export default Offers