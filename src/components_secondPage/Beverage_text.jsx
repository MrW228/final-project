import React from 'react'
import '../style_secondPage/beverage.css'
import str from '../image/simple.png'
import { NavLink } from 'react-router-dom'
function Beverage__text() {
  return (
    <div className='beverage'>
        <div className="span"></div>

      <div className="container">
        
        <div className="beverage__text">
          <NavLink to="/HomePage">Home</NavLink>
          <img className='strelka' src={str} alt="" />
          <b>Beverages</b>
        </div> 

      </div>
      <div className="span"></div>

    </div>
  )
}

export default Beverage__text
