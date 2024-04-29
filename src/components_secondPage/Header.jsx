import React from 'react'
import '../style/header.css'
import pastki_strelka from '../img/Cocktail__imgpasi.png'
import usa from '../img/usa.png'
import bag from '../img/Cocktail__bagimg.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className="hero">
                <NavLink to="/SecondPage">SHOP</NavLink>
                <img src={pastki_strelka} alt="" />
                <NavLink to='/'>FUN STUFF</NavLink>
                <img src={pastki_strelka} alt="" />
                <NavLink to='/'>FIND US</NavLink>
                <NavLink id='logo' to='/'>Cocktail</NavLink>                
                <img src={usa} alt="" />
                <NavLink to="/">USA</NavLink>
                <img src={pastki_strelka} alt="" />
                <NavLink to="/">CONTACT</NavLink>
                <NavLink to="/">LOG IN</NavLink>
                <img src={bag} alt="" />

            </div>
        </div>
    )
}

export default Header
