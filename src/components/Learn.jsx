import React from 'react'
import bokal from '../image/bokal.png'
import '../style/learn.css'

function Learn() {
  return (
    <div className='learn'>
      <div className="div1">
        <img src={bokal} alt="" />
      </div>
      <div className="div2">
        <h3>LEARN</h3>
        <h1>Ut enim</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <a href="">SHOP NOW</a>
      </div>
    </div>
  )
}

export default Learn
