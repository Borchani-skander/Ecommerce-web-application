import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const [Menu,SetMenu] = useState("shop");
  return (
    <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>DABCHI</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{SetMenu("shop")}}><Link to ='/' style={{textDecoration : 'none'}}>Shop</Link> {Menu === "shop" ? <hr/> :<></>}</li>
                <li onClick={()=>{SetMenu("men")}}><Link to = '/men' style = {{textDecoration : 'none'}}>Men</Link>{Menu === "men" ? <hr/> :<></>}</li>
                <li onClick={()=>{SetMenu("women")}}><Link to ='/women' style={{textDecoration: 'none'}}>Women</Link>{Menu === "women" ? <hr/> :<></>}</li>
                <li onClick={()=>{SetMenu("kid")}}><Link to ='/Kid' style={{textDecoration : 'none'}}>Kid</Link>{Menu === "kid" ? <hr/> :<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to ='/login'><button>Login</button></Link>
                <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
