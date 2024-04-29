import React from 'react'
import img1 from '../image/ess.png'
import '../style/utenim.css'
import { NavLink } from 'react-router-dom'

function Utenim() {
  return (
    <div className='utenim'> 
      <img src={img1} alt="" />
      <h3 className='des'>/DE · SWA/</h3>
      <h1>Ut enim ad minim veniam, quisnostrud exercitation ullamco</h1>
      <NavLink to={"/HomePage"}><a href='#!'>ABOUT US</a></NavLink>
    </div>
  )
}

export default Utenim
