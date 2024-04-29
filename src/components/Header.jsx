import React from 'react'
import '../style/header.css'
import bag from '../image/shape.png'
import usa from '../image/usa.svg'
import str from '../image/simple.png'
import { NavLink } from 'react-router-dom' 
import '../App.css'
 
function Header() {
    return (
        <div className="container">
            <div className='header'>
            <div className="hero">
                <NavLink to="/SecondPage">SHOP</NavLink>
                <img className='str1' src={str} alt="" />
                <NavLink to='/pdpPage'>FUN STUFF</NavLink>
                <img className='str2' src={str} alt="" />
                <NavLink to='/'>FIND US</NavLink>
                <NavLink id='logo' to='/'>Cocktail</NavLink>                
                <img className='usa' src={usa} alt="" />
                <NavLink to="/">USA</NavLink>
                <img className='str3' src={str} alt="" />
                <NavLink to="/">CONTACT</NavLink>
                <NavLink to="/LoginPage">LOG IN</NavLink>
                <NavLink to='/BagPage'><img className='bag' src={bag} alt="" /></NavLink>  
                <span className='span'>0</span>

            </div>
        </div> 
        </div>
       
    )
}

export default Header
