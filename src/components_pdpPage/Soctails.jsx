import React from 'react'
import '../style_pdpPage/soctails.css'
import bottle1 from '../image/product scroll section.png'
import { NavLink } from 'react-router-dom'

function Soctails() {
  return (
    <div className='soctails'>
      <div className="wrapper12">
        <div className="card124">
            <img className='bottle' src={bottle1} alt="" />
            <h1>Full - bodied</h1>
            <h3>$35.59</h3>
            <NavLink to="/ShopPage"><a href="">SHOP NOW</a></NavLink>
        </div>
        <div className="card124">
            <img className='bottle' src={bottle1} alt="" />
            <h1>Light - bodied</h1>
            <h3>$35.59</h3>
            <NavLink to="/ShopPage"><a href="">SHOP NOW</a></NavLink>
        </div>
        <div className="card124">
            <img className='bottle' src={bottle1} alt="" />
            <h1>Eral grey tote</h1>
            <h3>$35.59</h3>
            <NavLink to="/ShopPage"><a href="">SHOP NOW</a></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Soctails
