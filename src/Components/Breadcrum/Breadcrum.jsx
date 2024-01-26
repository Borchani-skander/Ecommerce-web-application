import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './Breadcrum.css'

export const Breadcrum = (props) => {
    const {product} = props;
    return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="arrow1" /> Shop <img src={arrow_icon} alt="arrow2"/>{product.category} <img src={arrow_icon} alt="arrow3" />{product.name}
    </div>
  )
}
