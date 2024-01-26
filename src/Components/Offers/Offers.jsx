import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for YOU</h1>
            <p>Only on Best sellers Products</p>
            <button id='offers-btn'>Check NOW</button>
        </div>
        <div className="offers-right">
            <img src= {exclusive_image} alt="Exclusive_image" />
        </div>
    </div>
  )
}

export default Offers