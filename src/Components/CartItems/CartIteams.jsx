import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

import { ShopContext } from '../../Context/ShopContext'

export const CartIteams = () => {
    const {all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartitems'>
       <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div> 
        <hr />
        <div>
            
            <hr />
            {all_product.map((e) => {
                if(cartItems[e.id] >0 ){
                return(
                        <div className="cartitems-format cartitems-format-main">
                            <img className = 'carticon-product-icon'src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>{e.new_price} Dianrs</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]} Dinars</p>
                            <img src={remove_icon} onClick= {() => {removeFromCart(e.id)}}alt="" id='cart-remove-icon' />
                        </div>
                
            )}})}
        </div>
    </div>
  )
}
